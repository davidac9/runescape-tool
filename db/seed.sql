CREATE TABLE item (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(50),
    item_image VARCHAR(400)
);

CREATE TABLE loadout (
    loadout_id SERIAL PRIMARY KEY,
    loadout_name VARCHAR(50)
);

CREATE TABLE loadout_item (
    loadout_id INT REFERENCES loadout(loadout_id),
    item_id INT REFERENCES item(item_id),
    item_location INT
);