const user = {
    name: "abc",
    age: 23,
    greed: function() {
        console.log(`hello ${this.name}`);
    }
};

user.greed(); // Output: hello abc
