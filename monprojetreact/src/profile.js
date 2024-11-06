import Card from './Card';
import bb from './flr.jpg';
export default function Profile() {
    return (
<>
    <Card>
    <h1>Photo</h1>
    <img
    className="profile"
    src={bb}
    alt="flower"
    size={{width:100 , height:50}}/>
    </Card>
    <Card>
    <h1>About</h1>
    <p>Hello Master 2IAD</p>
    </Card>
</>
);}