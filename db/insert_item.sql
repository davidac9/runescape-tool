INSERT INTO item (item_name, item_image)
VALUES (${item_name}, ${item_image})
RETURNING *;