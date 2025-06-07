let customers = [{
    name: "Pam Halpart",
    email: "Pamhalpart@email.com",
    purchases: ["Book","Pen","Tea Kettle"]
},
{
    name: "Ted Lasso",
    email: "TLasso@email.com",
    purchases: ["Whistle","Coffee"]
},
{
    name: "Haley Dunphy",
    email: "HaleyD123@email.com",
    purchases: ["Lip Gloss","Hair Brush"]
}];
customers.push({
    name: "Peter Griffin",
    email: "PG13@email.com",
    purchases: ["Beef Jerky","Gummy Bears"]
});
customers.shift();
customers[0].email = "TedLasso@newemail.com";
customers[1].purchases.push("Nail Polish");
customers.forEach(customer => {
    console.log(`Name: ${customer.name}`);
    console.log(`Email: ${customer.email}`);
    console.log(`Total Purchases: ${customer.purchases.length}`);
    console.log(`----------------------------'`);
});