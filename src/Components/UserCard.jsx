const UserCard=(props)=>{
    return <>
    <div class="card" style={{ width: '18rem', margin:'10px'}} >
      <img src={props.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <a href="#" class="btn btn-primary">{props.link}</a>
        </div>
    </div>
    </>
}

export default UserCard;