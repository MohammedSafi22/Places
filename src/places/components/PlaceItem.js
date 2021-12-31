import React, {useState,useContext} from 'react'
import Card from '../../shared/components/UIElements/Card'
import './PlaceItem.css'
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UIElements/Modal'
import Map from '../../shared/components/UIElements/Map'
import { AuthContext } from '../../shared/context/auth-context'

const PlaceItem = props => {
    const auth = useContext(AuthContext);
    const [showMap,setShowMap] = useState(false);
    const [showConfirmModal,setShowConfirmModal] = useState(false);

    const openMapHandler= ()=> setShowMap(true);
    const closenMapHandler= ()=> setShowMap(false);
    const showDeleteWarningHandler =()=> {
        setShowConfirmModal(true);
    };
    const cancelDeleteHandler =()=> {
        setShowConfirmModal(false);
    };
    const confirmDeleteHandler =()=> {
        setShowConfirmModal(false);
        console.log('DELETING...')
    };
    
    return (
        <React.Fragment>
            <Modal
             show={showMap}
              onCancle={closenMapHandler}
               header={props.address} 
               contentClass="place_item__modal-content"
               footerClass="place_item__modal-actions"
               footer={<Button onClick={closenMapHandler}>Close</Button>} >
                   <div className="map-container">
                      <Map center={props.coordinates} zoom={16}/>
                   </div>
              </Modal> 
              <Modal
                 show={showConfirmModal}
                 onCancle={cancelDeleteHandler}
                 header="Are you Sure ?"
                 footerClass="place-item__modal-actions"
                 footer={
                     <React.Fragment>
                         <Button inverse onClick={cancelDeleteHandler}>CANCLE</Button>
                         <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
                     </React.Fragment>
                 }
              >
                  <p>Do you want to delete this PLce? plese note that it can't be undone</p>
              </Modal>    
        <li className="place-item">
            <Card className="place-item__content">
            <div className="place-item__image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="place-item__info"> 
                <h2>{props.title}</h2>
                <h3>{props.address}</h3>
                <p>{props.description}</p>
            </div>
            <div className="place-item__actions">
                <Button inverse onClick={openMapHandler}>View On Map</Button>
                {auth.isLoggedIn && (<Button to={`/places/${props.id}`}>Edit</Button>)}
                {auth.isLoggedIn && (<Button danger onClick={showDeleteWarningHandler}>Delete</Button>)}
            </div> 
            </Card>
        </li>
        </React.Fragment>
    )
}

export default PlaceItem
