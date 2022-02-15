import React, { useState, useEffect } from "react";
function MyPagination() {
  const [filters, setFilters] = useState({
    key: "",
    operator: "",
    value: ""
  });
  const [items, setItems] = useState([]);
  const [dataItem, setData] = useState([]);
  const data = [
    {
      id: 1,
      name: "Akshit",
      screenName: "TY",
      followers: 100,
      friends: 150,
      location: "Moradabad",
      verified: true
    },

    {
      id: 2,
      name: "Nikita",
      screenName: "Y",
      followers: 2100,
      friends: 219,
      location: "Lucknow",
      verified: true
    },

    {
      id: 3,
      name: "Deeksha",
      screenName: "TYK",
      followers: 2100,
      friends: 219,
      location: "Noida",
      verified: true
    },

    {
      id: 4,
      name: "Ritesh",
      screenName: "RWER",
      followers: 2100,
      friends: 219,
      location: "Delhi",
      verified: true
    },

    {
      id: 5,
      name: "Somya",
      screenName: "TY",
      followers: 2100,
      friends: 219,
      location: "Gurugram",
      verified: true
    },

    {
      id: 6,
      name: "Eshika",
      screenName: "TY",
      followers: 2100,
      friends: 219,
      location: "Mumbai",
      verified: true
    },
    {
      id: 7,
      name: "Kalpana",
      screenName: "TY",
      followers: 2100,
      friends: 219,
      location: "Rampur",
      verified: true
    },

    {
      id: 8,
      name: "Parul",
      screenName: "TY",
      followers: 2100,
      friends: 219,
      location: "Chandigarh",
      verified: true
    },

    {
      id: 9,
      name: "Himani",
      screenName: "TY",
      followers: 2100,
      friends: 219,
      location: "Dehradun",
      verified: true
    }
  ];
  useEffect(() => {
    setItems(data);
    setData(data);
  }, []);

  const handleChange = (name, value) => {
    console.log(name + value);
    setFilters({
      ...filters,
      [name]: value
    });
  };
  const handleSearch = () => {
    console.log(filters);
    let keys = filters.key; //location
    let operate = filters.operator; // Equals
    let value = filters.value; // kozhikode
    let newData = dataItem
      .filter((person) => person[filters.key] <= value)
      .map((filteredPerson) => filteredPerson);
    console.log(newData);
    setItems(newData);
  };
  const DisplayData = items.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.screenName}</td>
        <td>{info.followers}</td>
        <td>{info.friends}</td>
        <td>{info.location}</td>
      </tr>
    );
  });

  return (
    <div>
      <div>
        <label>
          <select
            name="key"
            value={filters.key}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          >
            <option value="---">----</option>
            <option value="name">Name</option>
            <option value="screenName">ScreenName</option>
            <option value="followers">Followers</option>
            <option value="friends">Friends</option>
            <option value="location">Location</option>
          </select>
        </label>
        <label>
          <select
            name="operator"
            value={filters.operator}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          >
            <option value="---">----</option>
            <option value="Equals">Equals</option>
            <option value="includes">Contains</option>
            <option value="<=">{"<="}</option>
            <option value=">=">{">="}</option>
          </select>
        </label>
        <label>
          <input
            name="value"
            type="text"
            value={filters.value}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            onKeyUp={handleSearch}
          />
        </label>
      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>Screen Name</th>
            <th>Followers</th>
            <th>Friends</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default MyPagination;
