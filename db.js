// Unique Business Systems Limited - Unified Database Adapter
// Supports both Firebase Firestore and Local Storage fallback

(function(global) {
    let dbType = "local"; // "local" or "firebase"
    let firestoreInstance = null;
    let authInstance = null;

    // Check if firebaseConfig is valid and populated
    const isFirebaseConfigured = typeof firebaseConfig !== 'undefined' && 
        firebaseConfig.apiKey && 
        firebaseConfig.apiKey !== "YOUR_API_KEY" && 
        firebaseConfig.projectId && 
        firebaseConfig.projectId !== "YOUR_PROJECT_ID";

    if (isFirebaseConfigured && typeof firebase !== 'undefined') {
        try {
            // Initialize Firebase App
            firebase.initializeApp(firebaseConfig);
            firestoreInstance = firebase.firestore();
            // Initialize Firebase Auth
            authInstance = firebase.auth();
            dbType = "firebase";
            console.log("UBSL Database: Connected to Firebase Firestore + Auth");
        } catch (error) {
            console.error("UBSL Database: Firebase initialization failed. Falling back to localStorage.", error);
            dbType = "local";
        }
    } else {
        console.log("UBSL Database: Firebase not configured or SDK not loaded. Using localStorage Sandbox.");
    }

    // ID Generator Helper
    function generateId(type) {
        const prefix = type === "Order" ? "ORD" : 
                       type === "Booking" ? "BKG" : 
                       type === "Inquiry" ? "INQ" : "CON";
        return `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
    }

    // Save submission
    function saveSubmission(type, data) {
        if (dbType === "firebase") {
            const docId = generateId(type);
            return firestoreInstance.collection("submissions").doc(docId).set({
                id: docId,
                type: type,
                timestamp: new Date().toISOString(),
                status: "Pending Review",
                data: data
            }).catch(err => {
                console.error("Firestore write failed, saving to localStorage:", err);
                saveToLocalStorage(type, data);
            });
        } else {
            return Promise.resolve(saveToLocalStorage(type, data));
        }
    }

    function saveToLocalStorage(type, data) {
        const rawSubmissions = JSON.parse(localStorage.getItem("ubsl_submissions") || "[]");
        const docId = generateId(type);
        const newSubmission = {
            id: docId,
            type: type,
            timestamp: new Date().toISOString(),
            status: "Pending Review",
            data: data
        };
        rawSubmissions.push(newSubmission);
        localStorage.setItem("ubsl_submissions", JSON.stringify(rawSubmissions));
        return newSubmission;
    }

    // Get submissions (supports callback for real-time or snapshot updates)
    function getSubmissions(onUpdate) {
        if (dbType === "firebase") {
            // Real-time listener for Firebase
            return firestoreInstance.collection("submissions")
                .orderBy("timestamp", "desc")
                .onSnapshot(snapshot => {
                    const submissions = [];
                    snapshot.forEach(doc => {
                        submissions.push(doc.data());
                    });
                    onUpdate(submissions);
                }, err => {
                    console.error("Firestore listen failed, using localStorage:", err);
                    onUpdate(getLocalSubmissions());
                });
        } else {
            // Instant polling for localStorage (just trigger the callback once)
            onUpdate(getLocalSubmissions());
            // Return dummy unsubscribe
            return () => {};
        }
    }

    function getLocalSubmissions() {
        const list = JSON.parse(localStorage.getItem("ubsl_submissions") || "[]");
        // Sort descending by timestamp
        return list.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }

    // Update status
    function updateSubmissionStatus(id, status) {
        if (dbType === "firebase") {
            return firestoreInstance.collection("submissions").doc(id).update({
                status: status
            }).catch(err => {
                console.error("Firestore status update failed:", err);
                updateLocalSubmissionStatus(id, status);
            });
        } else {
            updateLocalSubmissionStatus(id, status);
            return Promise.resolve();
        }
    }

    function updateLocalSubmissionStatus(id, status) {
        let list = getLocalSubmissions();
        list = list.map(s => {
            if (s.id === id) {
                s.status = status;
            }
            return s;
        });
        localStorage.setItem("ubsl_submissions", JSON.stringify(list));
    }

    // Delete submission
    function deleteSubmission(id) {
        if (dbType === "firebase") {
            return firestoreInstance.collection("submissions").doc(id).delete().catch(err => {
                console.error("Firestore delete failed:", err);
                deleteLocalSubmission(id);
            });
        } else {
            deleteLocalSubmission(id);
            return Promise.resolve();
        }
    }

    function deleteLocalSubmission(id) {
        let list = getLocalSubmissions();
        list = list.filter(s => s.id !== id);
        localStorage.setItem("ubsl_submissions", JSON.stringify(list));
    }

    // Clear all data (optional, useful for sandbox mode)
    function clearAllData() {
        if (dbType === "firebase") {
            // Delete all collection items (batch delete)
            return firestoreInstance.collection("submissions").get().then(snapshot => {
                const batch = firestoreInstance.batch();
                snapshot.forEach(doc => {
                    batch.delete(doc.ref);
                });
                return batch.commit();
            });
        } else {
            localStorage.removeItem("ubsl_submissions");
            return Promise.resolve();
        }
    }

    // ──────────────────────────────────────────────
    //  PRODUCT MANAGEMENT (Admin-created products)
    // ──────────────────────────────────────────────

    function generateProductId() {
        return `PRD-${Math.floor(1000 + Math.random() * 9000)}-${Date.now().toString(36).toUpperCase()}`;
    }

    /** Save a new product. data: { name, category, description, specs[], image } */
    function saveProduct(data) {
        const docId = generateProductId();
        const product = {
            id: docId,
            ...data,
            createdAt: new Date().toISOString()
        };

        if (dbType === "firebase") {
            return firestoreInstance.collection("products").doc(docId).set(product).catch(err => {
                console.error("Firestore product save failed, using localStorage:", err);
                return saveProductToLocal(product);
            });
        } else {
            return Promise.resolve(saveProductToLocal(product));
        }
    }

    function saveProductToLocal(product) {
        const list = JSON.parse(localStorage.getItem("ubsl_custom_products") || "[]");
        list.push(product);
        localStorage.setItem("ubsl_custom_products", JSON.stringify(list));
        return product;
    }

    /** Get admin-managed products. onUpdate(products[]) is called with the current list. */
    function getProducts(onUpdate) {
        if (dbType === "firebase") {
            return firestoreInstance.collection("products")
                .orderBy("createdAt", "desc")
                .onSnapshot(snapshot => {
                    const products = [];
                    snapshot.forEach(doc => products.push(doc.data()));
                    onUpdate(products);
                }, err => {
                    console.error("Firestore product listen failed, using localStorage:", err);
                    onUpdate(getLocalProducts());
                });
        } else {
            onUpdate(getLocalProducts());
            return () => {};
        }
    }

    function getLocalProducts() {
        const list = JSON.parse(localStorage.getItem("ubsl_custom_products") || "[]");
        return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    /** Update an existing product by ID. fields: partial { name, category, description, specs, image } */
    function updateProduct(id, fields) {
        if (dbType === "firebase") {
            return firestoreInstance.collection("products").doc(id).update(fields).catch(err => {
                console.error("Firestore product update failed:", err);
                updateLocalProduct(id, fields);
            });
        } else {
            updateLocalProduct(id, fields);
            return Promise.resolve();
        }
    }

    function updateLocalProduct(id, fields) {
        let list = getLocalProducts();
        list = list.map(p => p.id === id ? { ...p, ...fields } : p);
        localStorage.setItem("ubsl_custom_products", JSON.stringify(list));
    }

    /** Delete an admin product by ID */
    function deleteProduct(id) {
        if (dbType === "firebase") {
            return firestoreInstance.collection("products").doc(id).delete().catch(err => {
                console.error("Firestore product delete failed:", err);
                deleteLocalProduct(id);
            });
        } else {
            deleteLocalProduct(id);
            return Promise.resolve();
        }
    }

    function deleteLocalProduct(id) {
        let list = getLocalProducts();
        list = list.filter(p => p.id !== id);
        localStorage.setItem("ubsl_custom_products", JSON.stringify(list));
    }

    // Expose functions globally
    global.db = {
        dbType: () => dbType,
        isCloudConnected: () => dbType === "firebase",
        saveSubmission,
        getSubmissions,
        updateSubmissionStatus,
        deleteSubmission,
        clearAllData,
        // Product management
        saveProduct,
        getProducts,
        updateProduct,
        deleteProduct,
        // Auth — only available when Firebase is configured
        auth: authInstance
    };
})(window);
