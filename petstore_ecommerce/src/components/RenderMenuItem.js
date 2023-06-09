import { Link } from "react-router-dom";

/**
 * This function renders an object based on the object type specified by
 * the parameter 'objType'.
 *      objType can have the following values:
 *          - obj_image
 *          - obj_list
 *          - obj_button
 *          - obj_input
 * @param {*} props
 * @returns RenderItem
 */
function RenderItem (props) {
    console.log(props.isImage)
    // Render an object as requested.
    switch(props.objType) {
        default:
            return (null);
        case "obj_image":
            return (
                <li>
                    <Link to={props.url}>{props.caption}
                        <img src={props.srcPath} alt={props.desc} id={props.id} width={128}/>
                    </Link>
                </li>
            );
        case "obj_list":
            return (
                <li>
                    <Link to={props.url}>{props.caption}</Link>
                </li>
            );
    }
}

export default RenderItem;