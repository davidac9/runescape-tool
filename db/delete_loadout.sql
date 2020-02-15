DELETE FROM loadout
WHERE loadout_id = $1;

DELETE FROM loadout_item
WHERE loadout_id = $1;