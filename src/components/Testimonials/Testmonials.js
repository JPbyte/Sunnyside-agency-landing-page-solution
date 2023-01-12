import React from 'react';
import { TestmunialsDiv } from './style';
import Emily from '../images/image-emily.jpg';
import Thomas from '../images/image-thomas.jpg';
import Jennie from '../images/image-jennie.jpg';

export default function Testmunials() {
    return(
        <TestmunialsDiv>
            <h3>CLIENT TESTIMONIALS</h3>
                <div className='perfil_geral'>
                    <div className='perfil_1'>
                        <div className='image-P1'>
                            <img src={Emily} alt="emily"/>
                        </div>
                            <p>We put our trust in Sunnyside and they delivered, Marketing
                            sure out needs were met and deadlines were always hit</p>
                                <div className='name_job'>
                                    <h4>Emily R.</h4>
                                        <span>Marketing Director</span>
                                </div>
                    </div>
                    <div className='perfil_2'>
                        <div className='image-P2'>
                            <img src={Thomas} alt="thomas"/>
                        </div>
                            <p>Sunnyside´s enthusiasm coupled with their keen interest in our brand´s 
                            success made it a satisfying and enjoyable experience.</p>
                                <div className='name_job'>
                                    <h4>Thomas S.</h4>
                                        <span>Chief Operating Officer</span>
                                </div>
                    </div>
                    <div className='perfil_3'>
                        <div className='image-P3'>
                            <img src={Jennie} alt="Jennie"/>
                        </div>
                            <p>Incredible end result! Our sales increased over 400% when we worked with
                            Sunnyside. Highly recommended!
                            </p>
                                <div className='name_job'>
                                    <h4>Jennie F.</h4>
                                        <span>Business Owner</span>
                                </div>
                    </div>
                </div>
        </TestmunialsDiv>
    )
}