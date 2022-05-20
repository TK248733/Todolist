const BuildCar = (props) => {
  let blogs = props.data;

  let handleDelete = props.func;

  return (
    <div className="blog-list">
      <br />
      <h1>To Do List</h1>
      {blogs.map((data) => (
        <div className="blogs">
          <input className="checkbox" type="checkbox"/>
          <h2>{data.title}</h2>
          <h2>{data.taskinfo}</h2>
          <p>Assigned To : {data.author}</p>
          <button  onClick={() => handleDelete(data.id)}>Delete From List</button>
        </div>
      ))}
    </div>
  );
};

export default BuildCar;
