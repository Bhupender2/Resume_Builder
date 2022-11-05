import CodeA from "./Templatecss/CodeA";
import CodeB from "./Templatecss/CodeB";
import CodeC from "./Templatecss/CodeC";
import CodeD from "./Templatecss/CodeD";
import CodeE from "./Templatecss/CodeE";
import CodeF from "./Templatecss/CodeF";
import CodeG from "./Templatecss/CodeG";
import CodeH from "./Templatecss/CodeH";

const Preview = ({idx}) => {

    switch(idx){
      case '0': return <CodeA/>
      case '1': return <CodeB/>
      case '2': return <CodeC/>
      case '3': return <CodeD/>
      case '4': return <CodeE/>
      case '5': return <CodeF/>
      case '6': return <CodeG/>
      case '7': return <CodeH/>
      default:return ""
    }
};
export default Preview;
