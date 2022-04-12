/**
 *
 */
import React, {useState, useEffect} from "react";
// Custom components
import {List } from "./../components"

const Home = () => {
  const [listData, setListData] = useState([])
  
  useEffect(() => {
    setListData([{
      name: "HP 260 G4 DM CI5-10210U 8/256 W10P",
      sn: "8CC1464225",
      warranty: "",
      owners: [{name: "John Do", owner: true}, {name: "Jane Do", owner: false}],
      eol: false,
      key: "8CC1464225",
      issues: [],
      tags: [{name: "Something"}, {name: "Something"}]
    }]) 
  }, [])

  return (<div>
    <List data={listData} />
    </div>);
}

export default Home;
