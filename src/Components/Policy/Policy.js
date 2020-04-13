import React from 'react';
import Politician from './img/politician.png'
import './Policy.css'
import PolicyBack from './img/policy.png'
import checked from './img/checked.png'
import unChecked from './img/unChecked.png'

const Policy = (props) =>{

	let checkButton1 = <img className="checkMark" src={unChecked}/>;

	if(props.policyList[0].enacted){
		checkButton1 = <img className="checkMark" src={checked}/>
	}else{
		checkButton1 = <img className="checkMark" src={unChecked}/>
	}

	let checkButton2 = <img className="checkMark" src={unChecked}/>;

	if(props.policyList[1].enacted){
		checkButton2 = <img className="checkMark" src={checked}/>
	}else{
		checkButton2 = <img className="checkMark" src={unChecked}/>
	}

	let checkButton3 = <img className="checkMark" src={unChecked}/>;

	if(props.policyList[2].enacted){
		checkButton3 = <img className="checkMark" src={checked}/>
	}else{
		checkButton3 = <img className="checkMark" src={unChecked}/>
	}


	return(
		<div className="policy">
			<div className="bribePolitician">
				<img className="pixelPolitician" src={Politician}/>
				<p className='descriptionH'>The Policy tab shows the policies you may enact, policies have costs that have to be balanced!</p>
			</div>
			<div className="policyList">
				<div className="policyButtons">
					<h1 className="titleP">Policies</h1>
					<div className="onePolicy">
						<button onClick={() => props.changePolicyState(0)} className="policyButton">
							<p className="policyDescription">{props.policyList[0].effect}</p>
							{checkButton1}
						</button>
					</div>
					<div className="onePolicy">
						<button onClick={() => props.changePolicyState(1)} className="policyButton">
							<p className="policyDescription">{props.policyList[1].effect}</p>
							{checkButton2}
						</button>
					</div>
					<div className="onePolicy">
						<button onClick={() => props.changePolicyState(2)} className="policyButton">
							<p className="policyDescription">{props.policyList[2].effect}</p>
							{checkButton3}
						</button>
					</div>
					<button className="policyButton">
					Enact 4
					</button>
				</div>
			</div>
		</div>
	);
}

export default Policy;