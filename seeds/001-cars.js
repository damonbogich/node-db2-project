exports.seed = async function(knex) {
  const testData = [
    { vin: "1133440", make: "Ford", model: "Escape", mileage: "100,000 miles", transmission_type: "Auto", title_status: "Wonderful" },
    { vin: "1133443", make: "Chevy", model: "Corvette", mileage: "109,000 miles", transmission_type: "Manual", title_status: "Marvelous" },
    { vin: "1133449", make: "Chrysler", model: "300", mileage: "105,000 miles", transmission_type: "Auto", title_status: "Delightful" }
  ];

  // truncate deletes ALL existing entries and reset the id back to 1
  await knex("cars").truncate();

  return knex("cars").insert(testData);
};
