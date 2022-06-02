import React from "react";

export const VisibilityControl = props => {
    return (
        <div className="form-cheked">
            <input 
                type="checkbox"
                className="form-check-input"
                checked={props.isChecked}
                onChange={e => props.callback(e.target.checked)}
            />
            <label htmlFor="form-check-label">
                Ta {props.description}
            </label>
            
        </div>
    )
}