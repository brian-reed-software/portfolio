import React, {useState, createRef} from 'react';
import {Link} from 'react-scroll'
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import { ExternalLink } from 'react-external-link';
import Tilt from 'react-parallax-tilt';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardHeader,
    Col,
    CardColumns,
} from "reactstrap"; 
import ColorThief from "colorthief";
import BackdropFilter from "react-backdrop-filter";
import { Fade } from 'react-reveal';
const useStyles = makeStyles((theme) => ({
  card: {
    background: 'linear-gradient(80deg, steelblue 10%,rgb(106, 206, 206) 80%, #80e5ff 110%)',
    boxShadow: `inset 0px 0px 50px 2px black,inset 0px 0px 5px 5px black, 0 0 20px -5px black;`,
        //   boxShadow:     "inset 0 0 50px #fff, inset 20px 0 80px #f0f, inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff, 0 0 20px cyan, -10px 0 20px #f0f, 0px 0 2px cyan",
   borderBottom: '1px solid white',
    borderRight: '2px solid gray',
    '&:hover': {  
    cursor: 'pointer'},
    border: 0,
    fontSize: 16,
    color: 'steelblue',
    padding: '10px',
    margin:'3px',
    textShadow: '0 2px 2px black',
    textAlign: 'justify',
    userSelect: "none",
    borderRadius: '10px',
    filter: "drop-shadow(0px 0px 50px steelblue)",
  },
}));

const ProjectsCard = ({data}) => {
    const [colorArrays, setColorArrays] = useState([]);
    const imgRef = createRef();
    function getColorArrays() {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
    }
    function rgb(values) {
        return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
  }
    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(800);
    const classes = useStyles();
    return ( 
        <Col lg="4">
        {/* <Draggable
        defaultPosition={{ x: 10, y: 10 }}
        onDrag={() => console.log("onDrag")}
        cancel={".react-resizable-handle"}
      >
        <ResizableBox
          width={width}
          height={height}
          onResize={(e, data) => {
            setWidth(data.size.width);
            setHeight(data.size.height);
          }}
          resizeHandles={["e"]}
        > */}
        <Fade left duration={1000} distance="40px">
            <ExternalLink href={data.myLink}>
            <Tilt
             className="parallax-effect-img"
             tiltMaxAngleX={12}
             tiltMaxAngleY={12}
             perspective={2000}
             transitionSpeed={9500}
             scale={1.1}
             gyroscope={true}
             glareEnable={true}
                >
            <div className={classes.card} >
            <div  style={{flex: 1}} style={{color: 'white'}} className="card1 justify-content-center text-center rounded">
            <Card className="shadow" style={{ background: rgb(colorArrays) }} >             
             <img ref={imgRef} className="" top src={data.companyname} style={{borderRadius: "5%" }} onLoad={() => getColorArrays()} alt=""/>
                    {/* data.company  */}
            </Card>
             <div >
                {/* style={{borderRadius: "100%" }} */}
            <img className=" bg-black  mb-3 img-center img-fluid" top src={data.companylogo} style={{borderRadius: "10px" }}  alt=""/>
            {data.date}
                <CardText style={{ textShadow: "0 0 10px black" }} className="description my-3 text-left" >
             {data.desc}
                <ul>
               {
                data.descBullets ? 
                data.descBullets.map((desc) => {
                return <li key={desc}>{desc}</li>
                }) : null
                }
                </ul>
                </CardText>
              </div>
            </div>
            </div>
            </Tilt>
            </ExternalLink>
            {/* </ResizableBox>
            </Draggable> */}
        </Fade>
        </Col>
     )
}
export default ProjectsCard;