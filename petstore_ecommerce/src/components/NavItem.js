/**
 * This function renders either a logo or a list item based on the
 * prop 'isImage'.
 * When 'isImage' is set to true the the components renders an image.
 * @param {*} props
 * @returns NavItem
 */
function NavItem (props) {
    console.log(props.isImage)
    // Render an image if requested
    if (props.isImage == true)
        return (
            <img src={props.srcPath} alt={props.desc} id={props.id} width={128}/>
        )
    else
        return (
            <li><a href={props.url}>{props.caption}</a></li>
        )
}

export default NavItem;