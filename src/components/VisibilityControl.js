import React from "react";

export const VisibilityControl = props => {
    return (
        <div className="form-cheked">
<<<<<<< HEAD
            <input  
           type="checkbox"
            className="form-check-input"
            checked={props.isChecked}
            onChange={e => props.callback(e.target.checked)} 
                    
            />
            <label htmlFor="form-check-label">
                 Ta Echo {props.description}
            </label>
        </div>
            
    )
}

=======
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
>>>>>>> 5f2aa5414c9505705891e2c6b90d6816021ed33f
