function SnackCard({ snack: { snack_name, snack_description, category_name} }) { 
    return (
        <li className="snack-card">
            <h2>{snack_name}</h2>
            <p>{snack_description}</p>
            <p>Category: { category_name }</p>
        </li>);
}

export default SnackCard