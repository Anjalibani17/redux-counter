import React from 'react';
import {VISIBILITY_FILTERS}from '../components/constant'
import { connect } from 'react-redux';
import cx from "classnames";
import visibilityFilter from '../redux/reducer/visibilityFilter';
import { setFilter } from '../redux/actions/actions';
//this comp used to create filter all complete and in completed


const VisibilityFilters = ({activeFilter,setFilter}) => {
    return (
        <div>
        {Object.keys(VISIBILITY_FILTERS).map((index)=>{
            //here we store all filter value into currentfilter
            const currentFilter= VISIBILITY_FILTERS[index];
            return(
                <span key={index} className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
                onClick={()=>{
                    setFilter(currentFilter)
                }}>{currentFilter}</span>

            )
        })   
        }       
        </div>
    );
};
const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter };
  };


  export default connect(
    mapStateToProps,
    { setFilter }
  )(VisibilityFilters);
  
