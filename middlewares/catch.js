module.exports = (res, err)=>{
  console.log(err)
  res.status('test')
  res.status(500).json({
    msg: "Server lagi ngaco",
    info: err
  })}