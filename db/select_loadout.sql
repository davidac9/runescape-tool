SELECT l.loadout_id, l.loadout_name, i.item_image, li.item_location FROM loadout l
JOIN loadout_item li
ON l.loadout_id = li.loadout_id
JOIN item i
ON li.item_id = i.item_id
WHERE l.loadout_id = $1