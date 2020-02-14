INSERT INTO loadout (loadout_name)
VALUES ($1)
RETURNING *;