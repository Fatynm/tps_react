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
    size={{width:300 , height:500}}/>
    </Card>
    <Card>
    <h1>About</h1>
    <p>Aklilu Lemma was a distinguished Ethiopian scientist
    who discovered a natural treatment to schistosomiasis.
    </p>
    </Card>
</>
);}