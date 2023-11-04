const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
  ];

  const averagePriceSpan = document.querySelector("span");
  const freelancerTbody = document.querySelector("tbody");

  
  function getAverageStartingPrice() {
    return (
        freelancers.reduce((total, freelancers) => freelancers.price + total,0) / freelancers.length
    ).toFixed(2);
    }

  function render(){
    const freelancerRows = freelancers.map(freelancer => {
        const freelancerRows = document.createElement("tr");
        freelancerRows.innerHTML = `
        <td>${freelancer.name}</td>
        <td>${freelancer.occupation}</td>
        <td>$${freelancer.price}</td>
        `;

        return freelancerRows;
    })
    freelancerTbody.replaceChildren(...freelancerRows);

    averagePriceSpan.textContent = getAverageStartingPrice();
  }
  render();

  const names = ["Dr. Slice", "Dr . Pressure", "Prof. Possibility", "Prof. Prism", "Dr. Impulse", "Prof. Spark", "Dr. Wire", "Prof. Goose"];

  const occupations = ["gardener", "programmer", "teacher", "driver"];

  function addFreelancer(){
    if(freelancers.length < 3){
        freelancers.push({
            name:"Carol",
            occupation:"Programmer",
            price: 70,
        })
        return;
    }
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = Math.floor(Math.random() * 75+25);
    freelancers.push({name, occupation, price});
  }

  setInterval(() =>{
    addFreelancer();
    render();
  }, 3000);
  