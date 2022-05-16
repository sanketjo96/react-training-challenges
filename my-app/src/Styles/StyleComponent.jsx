import React, { Component } from 'react'
import './External.css'
import Styles from './External.module.css'

export default class StyleComponent extends Component {
    render() {
        console.log(Styles)
        return (
            <div className={`conatiner ${Styles.conatiner}`}>
                <div className='section-1'>
                    <div>Section 1</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat, justo sit amet tempor venenatis, est tortor rhoncus quam, in tristique eros turpis ac dolor. Quisque quam nunc, rhoncus lobortis pulvinar ut, accumsan vel diam. Proin in tristique dolor. Fusce sed accumsan leo, eu varius leo. Duis vel feugiat nunc, vitae malesuada purus. Etiam interdum congue dolor sit amet imperdiet. Vivamus vel magna sed eros tempus condimentum. Morbi ut mi et arcu ultrices suscipit. Nunc bibendum mi vitae quam interdum eleifend. Mauris in tortor a ligula imperdiet placerat. Donec eu pellentesque leo. Vivamus nec mollis tortor. Nam efficitur ipsum sed suscipit sodales.</p>
                </div>

                <div style={{backgroundColor: 'blue'}}>
                    <div style={{color: 'white'}}>Section 2</div>
                    <p style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat, justo sit amet tempor venenatis, est tortor rhoncus quam, in tristique eros turpis ac dolor. Quisque quam nunc, rhoncus lobortis pulvinar ut, accumsan vel diam. Proin in tristique dolor. Fusce sed accumsan leo, eu varius leo. Duis vel feugiat nunc, vitae malesuada purus. Etiam interdum congue dolor sit amet imperdiet. Vivamus vel magna sed eros tempus condimentum. Morbi ut mi et arcu ultrices suscipit. Nunc bibendum mi vitae quam interdum eleifend. Mauris in tortor a ligula imperdiet placerat. Donec eu pellentesque leo. Vivamus nec mollis tortor. Nam efficitur ipsum sed suscipit sodales.</p>
                </div>

                <div className={Styles.sectionThree}>
                    <div>Section 3</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat, justo sit amet tempor venenatis, est tortor rhoncus quam, in tristique eros turpis ac dolor. Quisque quam nunc, rhoncus lobortis pulvinar ut, accumsan vel diam. Proin in tristique dolor. Fusce sed accumsan leo, eu varius leo. Duis vel feugiat nunc, vitae malesuada purus. Etiam interdum congue dolor sit amet imperdiet. Vivamus vel magna sed eros tempus condimentum. Morbi ut mi et arcu ultrices suscipit. Nunc bibendum mi vitae quam interdum eleifend. Mauris in tortor a ligula imperdiet placerat. Donec eu pellentesque leo. Vivamus nec mollis tortor. Nam efficitur ipsum sed suscipit sodales.</p>
                </div>
            </div>



        )
    }
}
