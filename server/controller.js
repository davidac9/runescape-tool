module.exports = {
    addItem: async (req, res) => {
        const db = req.app.get('db')
        try {
            const item = await db.insert_item(req.body)
            return res.status(200).send(item)
        } catch (e) {
            console.log('failed to add item')
        }
    },
    addLoadout: async (req, res) => {
        const db = req.app.get('db')
        try {
            const loadout = await db.insert_loadout([req.body.loadout_name])
            return res.status(200).send(loadout)
        } catch (e) {
            console.log('failed to add loadout')
        }

    },
    addLoadoutItem: async (req, res) => {
        const db = req.app.get('db')
        try {
            const loadoutItem = await db.insert_loadout_item(req.body)
            return res.status(200).send(loadoutItem)
        } catch (e) {
            console.log('failed to add loadout item')
        }
    },

    
    updateLoadout: async (req, res) => {
        const db = req.app.get('db')
        try {
            const updatedLoadout = db.update_loadout(req.body)
            res.status(200).send(updatedLoadout)
        } catch {
            console.log('failed to update loadout')
        }
    },
    updateLoadoutItem: async (req, res) => {
        const db = req.app.get('db')
        try {
            const updatedLoadoutItem = db.update_loadout_item(req.body)
            res.status(200).send(updatedLoadoutItem)
        } catch {
            console.log('failed to update loadout item')
        }
    },
    
    
    getItemNames: async (req, res) => {
        const db = req.app.get('db')
        try {
            const itemNames = db.select_item_names
            res.status(200).send(itemNames)
        } catch {
            console.log('failed to get item names')
        }
    },
    getLoadoutNames: async (req, res) => {
        const db = req.app.get('db')
        try {
            const loadoutNames = db.select_loadout_names
            res.status(200).send(loadoutNames)
        } catch {
            console.log('failed to get item names')
        }
    },
    getItemImage: async (req, res) => {
        const db = req.app.get('db')
        try {
            const itemImage = db.select_item_image(req.params)
            res.status(200).send(itemImage)
        }
        catch {
            console.log('failed to get item image')
        }
    },
    getLoadout: async (req, res) => {
        const db = req.app.get('db')
        try {
            const loadout = db.select_loadout(req.params)
            res.status(200).send(loadout)
        } catch {
            console.log('failed to get loadout')
        }
    },
    
    
    deleteItem: async (req, res) => {
        const db = req.app.get('db')
        try {
            const { item_id } = req.query
            const item = db.delete_item([item_id])
            res.status(200).send(item)
        } catch {
            console.log('failed to delete item')
        }
    },
    deleteLoadoutItem: async (req, res) => {
        const db = req.app.get('db')
        try {
            const { loadout_id, item_location } = req.query
            const loadoutItem = db.delete_loadout_item({ loadout_id, item_location })
            res.status(200).send(loadoutItem)
        } catch {
            console.log('failed to delete loadout item')
        }
    },
    deleteLoadout: async (req, res) => {
        const db = req.app.get('db')
        try {
            const { loadout_id } = req.query
            const loadout = db.delete_loadout([loadout_id])
            res.status(200).send(loadout)
        } catch {
            console.log('failed to delete loadout')
        }
    }
}