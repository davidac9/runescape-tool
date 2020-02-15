SELECT l.loadout_id, i.item_image, li.item_location FROM loadout_item li
JOIN loadout l
ON l.loadout_id = li.loadout_id
JOIN item i
ON li.item_id = i.item_id
WHERE l.loadout_id = $1