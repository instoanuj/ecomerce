import React from "react";
import { Image } from "react-bootstrap";
import Abt from '../Images/Abt.png';
const About = () => {
    return (
        <>
            <div className="container">
                <h2 style={{ fontFamily: 'fantasy', fontWeight: 'bold', textAlign: 'center', padding: '20px' }}>About</h2>
                <div className="conatainer">
                    <Image roundedCircle style={{ float: 'left', maxWidth: '200px', margin: '20px 50px' }} src={Abt} />
                    <p style={{
                        fontSize: '20px',
                        margin: '60px',
                        color: '#777'
                    }}>Lorem ipsum carrots enhanced rebates. Excellent sayings
                        of a man of sorrows, hates no prosecutors will unfold in the
                        enduring of which were born in it? Often leads smallest mistake some
                        pain main responsibilities are to stand for the right builder of pleasure,
                        accepted explain up to now. , The things we are accusing of these in the explication
                        of the truth receives from the flattery of her will never be the trouble and they are
                        refused to the pleasures and the pleasures of the pain, explain the treatment of
                        excepturi of the blessed sufferings. I never said will unfold in him receives at another
                        time he may please the one that those works, we are less than they, this refused to the
                        pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a
                        right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the
                        needs of the agony of the choice. We hate the fellow.
                        Lorem ipsum dolor, sit amet consectetur rebates. The distinction,
                        that arise from or to. The greater, therefore, an obstacle to the
                        duties of the debts receives the very great importance to us that
                        these are consequent to that question is answered, which was selected for the fault, it
                        is often one of us, however, have any! Moreover, this is often not at once take the hardships
                        of the life of harsh condemn, we are accusing him? Him whom something large cisterns.</p>
                </div>
            </div>
        </>

    )
}
export default About;