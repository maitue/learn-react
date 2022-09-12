import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'
function Paragraph() {
    const context = useContext(ThemeContext)
    console.log(context)
    return ( 
        <div>
            <button onClick={context.toggleTheme}> toggle theme</button>
            <p className={context.theme}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                Ut nec magna quis justo accumsan interdum.Interdum et malesuada fames ac ante ipsum primis in faucibus.<br />
                Nulla mauris nunc, porta convallis ullamcorper ac, gravida eget enim.<br />
                Vivamus ac sodales ex.Sed diam mauris, condimentum quis consectetur vitae, elementum sed velit.<br />
                Mauris eu dolor diam.Phasellus scelerisque ligula dolor, in commodo elit sollicitudin quis.<br />
                In hac habitasse platea dictumst.Vestibulum porttitor gravida ullamcorper.<br />
                Vivamus consequat neque vulputate purus lacinia, sit amet fringilla ipsum fermentum.  </p>
        </div>
     );
}

export default Paragraph;