/**
 * This function renders an object based on the object type specified by
 * the parameter 'objType'.
 *      objType can have the following values:
 *          - obj_image
 *          - obj_list
 *          - obj_button
 *          - obj_input
 * @param {*} props
 * @returns NavItem
 */
function NavItem (props) {
    console.log(props.isImage)
    // Render an object as requested.
    switch(props.objType) {
        default:
            return (null);
        case "obj_image":
            return (
                <img src={props.srcPath} alt={props.desc} id={props.id} width={128}/>
            );
        case "obj_list":
            return (
                <li><a href={props.url}>{props.caption}</a></li>
            );
    }
}

export default NavItem;