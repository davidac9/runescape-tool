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
            const updatedLoadout = await db.update_loadout(req.body)
            res.status(200).send(updatedLoadout)
        } catch {
            console.log('failed to update loadout')
        }
    },
    updateLoadoutItem: async (req, res) => {
        const db = req.app.get('db')
        try {
            const updatedLoadoutItem = await db.update_loadout_item(req.body)
            res.status(200).send(updatedLoadoutItem)
        } catch {
            console.log('failed to update loadout item')
        }
    },
    
    
    getItemNames: async (req, res) => {
        const db = req.app.get('db')
        try {
            const itemNames = await db.select_item_names()
            res.status(200).send(itemNames)
        } catch {
            console.log('failed to get item names')
        }
    },
    getLoadoutNames: async (req, res) => {
        const db = req.app.get('db')
        try {
            if (!req.query.loadout_id) {
                const loadoutNames = await db.select_loadout_names()
                res.status(200).send(loadoutNames)
            } else {
                const loadoutName = await db.select_loadout_name([req.query.loadout_id])
                res.status(200).send(loadoutName)
            }
        } catch {
            console.log('failed to get item names')
        }
    },
    getItemImage: async (req, res) => {
        const db = req.app.get('db')
        try {
            const itemImage = await db.select_item_image([req.query.item_id])
            res.status(200).send(itemImage)
        }
        catch {
            console.log('failed to get item image')
        }
    },
    getLoadoutItems: async (req, res) => {
        const db = req.app.get('db')
        try {
            const loadout = await db.select_loadout_items(req.query.loadout_id)
            res.status(200).send(loadout)
        } catch {
            console.log('failed to get loadout')
        }
    },
    
    
    deleteItem: async (req, res) => {
        const db = req.app.get('db')
        try {
            const { item_id } = req.query
            const item = await db.delete_item([item_id])
            res.status(200).send(item)
        } catch {
            console.log('failed to delete item')
        }
    },
    deleteLoadoutItem: async (req, res) => {
        const db = req.app.get('db')
        try {
            const { loadout_id, item_location } = req.query
            const loadoutItem = await db.delete_loadout_item({ loadout_id, item_location })
            res.status(200).send(loadoutItem)
        } catch {
            console.log('failed to delete loadout item')
        }
    },
    deleteLoadout: async (req, res) => {
        const db = req.app.get('db')
        try {
            const { loadout_id } = req.query
            const loadout = await db.delete_loadout([loadout_id])
            res.status(200).send(loadout)
        } catch {
            console.log('failed to delete loadout')
        }
    }
}