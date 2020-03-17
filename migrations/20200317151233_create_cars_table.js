// "up" describes the changes that will be applied to the database
exports.up = function(knex) {
    // create the vegetables table
    return knex.schema.createTable("cars", tbl => {
      // remember to "return" the call to knex.schema
      // a primary key, named id, type integer, autoincrement
      tbl.increments();
  
      tbl
        .string("vin", 255)
        .notNullable();
        tbl
        .string("make", 255)
        .notNullable()
        .index(); 
        tbl
        .string("model", 255)
        .notNullable()
        .index();
        tbl
        .string("mileage", 255)
        .notNullable();
        tbl
        .string("transmission_type", 255);
        tbl
        .string("title_status", 255);
       
    });
  };
  
  // "down" describes how to undo the changes from the up function
  exports.down = function(knex) {
    // remove (drop) the vegetables table
    return knex.schema.dropTableIfExists("cars");
  };