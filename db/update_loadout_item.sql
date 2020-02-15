UPDATE loadout_item
SET item_id = ${new_item_id}
WHERE loadout_id = ${loadout_id} AND item_location = ${item_location}
-- RETURNING *;