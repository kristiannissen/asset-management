/**
 *
 */
import React from "react"
import "./listitem.css"

const ListItem = (props) => {
  return (<div className="list__item">
      <div className="list__item_title">{props.name}</div>
      <div className="list__item_content">
        <div className="">SN: {props.sn}</div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>)
}

export default ListItem;
