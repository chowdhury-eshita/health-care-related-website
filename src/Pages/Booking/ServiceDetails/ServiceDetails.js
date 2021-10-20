import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    let history = useHistory();

    const handleClick = () => {
        history.push("/successful");
    }
    const data = [
        {
            "id": 1,
            "testName": "Blood Osmolality",
            "cost": 1000,
            "description": "Normal results are: 275 to 295 mOsm/kg for adults and older adults. 275 to 290 mOsm/kg for children. High levels may be caused by: Too little water in the body. High levels of salt or sugar in the blood. This may be caused by problems such as poorly controlled diabetes.",
            "img": "https://www.ucsfbenioffchildrens.org/-/media/project/ucsf/ucsf-bch/images/medical-tests/hero/osmolality-urine-test-708x556-2x.jpg"
        },
        {
            "id": 2,
            "testName": "MRI",
            "cost": 10000,
            "description": "Magnetic resonance imaging (MRI) is a type of scan that uses strong magnetic fields and radio waves to produce detailed images of the inside of the body. An MRI scanner is a large tube that contains powerful magnets. You lie inside the tube during the scan. MRI can be used to detect brain tumors, infection, and the causes of headache.",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3x01IRJwLCTZ2LU1KLD8kcfoqSCwSqiQ9Cg&usqp=CAU"
        },
        {
            "id": 3,
            "testName": "Endoscopy",
            "cost": 1500,
            "description": "An endoscopy is a procedure where organs inside your body are looked at using an instrument called an endoscope. All endoscopic procedures involve some degree of sedation, which relaxes you and subdues your gag reflex. Being sedated during the procedure will put you into a moderate to deep sleep",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7OL93iukby_Y9LytKMPBfr3S7ObKUDv9yw&usqp=CAU"
        },
        {
            "id": 4,
            "testName": "X-Ray",
            "cost": 600,
            "description": "X-rays are a type of radiation called electromagnetic waves. X-ray imaging creates pictures of the inside of your body. The images show the parts of your body in different shades of black and white. The most familiar use of x-rays is checking for fractures.",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEmRDtHjPt99VP2dnyCBXUmc1T8zpsyeIHQ&usqp=CAU"
        },
        {
            "id": 5,
            "testName": "ECG",
            "cost": 300,
            "description": "An electrocardiogram (ECG) is a simple test that can be used to check your heart's rhythm and electrical activity. Sensors attached to the skin are used to detect the electrical signals produced by your heart each time it beats.",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZn1aWmuwjhWzoxS3fdUqDjg2RsmLXjI5cA&usqp=CAU"
        },
        {
            "id": 6,
            "testName": "Ultrasonography",
            "cost": 1200,
            "description": "Ultrasound/Ultrasonography: A procedure that uses high-energy sound waves to look at tissues and organs inside the body. The sound waves make echoes that form pictures of the tissues and organs on a computer screen (sonogram).",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMAHlbdZrbhf0LSb33Mtddd0yzB1C-iRrBQ&usqp=CAU"
        }
    ]
    const item = data.find(items => items.id === parseInt(serviceId));
    return (
        <div>
            <div className="mt-5 pt-5 container text-center">
                <img style={{ width: 600, height: 400 }} src={item.img} alt="" />
                <h3>{item.testName}</h3>
                <p className="text-center">{item.description}</p>
            </div>
            <button onClick={handleClick} className="btn btn-success">Book test</button>
        </div>
    );
};

export default ServiceDetails;