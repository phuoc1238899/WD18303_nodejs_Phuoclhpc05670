const Hop_dong = require("../../models/hop_dong.js");
const lad = require('lodash');
const validator = require('validator');

exports.gethop_dong = (req, res, next) => {
  Hop_dong.getAll(function (data) {
    res.status(200).json({
      ghop_dong : data});
  });
};

exports.checkInput = async (req, res, next) =>{
  let error = {};
  let ten_nguoi_mua = lad.get(req.body,"ten_nguoi_mua","");
  let ten_nguoi_ban = lad.get(req.body,"ten_nguoi_ban","");
  let gia_tien = lad.get(req.body,"gia_tien","");
  let ngay_ky = lad.get(req.body,"ngay_ky","");
  let trang_thai = lad.get(req.body,"trang_thai","");

  if(validator.isEmpty(ten_nguoi_mua))
  error.ten_nguoi_mua="phai nhap ten nguoi mua";
  if(validator.isEmpty(ten_nguoi_ban))
  error.ten_nguoi_ban="phai nhap ten nguoi ban";
  if(validator.isEmpty(gia_tien))
  error.gia_tien="phai nhap gia tien";
  if(validator.isEmpty(ngay_ky))
  error.ngay_ky="phai nhap ngay ky";
  if(validator.isEmpty(trang_thai))
  error.trang_thai="phai nhap trang thai";
  if(lad.isEmpty(error))
  return next();
return res.status(400).json(error)
}

exports.gethop_dongById = (req, res, next) => {
  let id = req.params.id;
  Hop_dong.gethop_dongById(id, function (data) {
    res.status(200).json(
      { 
        hop_dong : data 
      }
      );
  });
};
// exports.updatePosts = (req, res, next) =>{
//   let id = req.params.id;
//   Hop_dong.updatePosts(id, function (data) {
//     res.status(200).json(
//       { 
//         data: data 
//       }
//     );
//   });
// }

// exports.getaddhop_dong = (req, res, next) => {
//   res.render("admin/post/add");
// };

exports.posthop_dong = (req, res, next) => {

  let ten_nguoi_mua = req.body.ten_nguoi_mua;
  let ten_nguoi_ban = req.body.ten_nguoi_ban;
  let gia_tien = req.body.gia_tien;
  let ngay_ky = req.body.ngay_ky;
  let trang_thai = req.body.trang_thai;

  let addPost = {
    ten_nguoi_mua: ten_nguoi_mua,
    ten_nguoi_ban: ten_nguoi_ban,
    ten_nguoi_mua: ten_nguoi_mua,
    gia_tien: gia_tien,
    ngay_ky: ngay_ky,
    trang_thai: trang_thai,
  };

  Hop_dong.hop_dongpost(addPost, function (err, addPost) {
    res.status(201).json({
      Message: "thanh cong",
      phop_dong : addPost,
    });
  });
};

exports.updatehop_dong = (req, res, next) => {

  let ten_nguoi_mua = req.body.ten_nguoi_mua;
  let ten_nguoi_ban = req.body.ten_nguoi_ban;
  let gia_tien = req.body.gia_tien;
  let ngay_ky = req.body.ngay_ky;
  let trang_thai = req.body.trang_thai;

  let update = [
    ten_nguoi_mua,
    ten_nguoi_ban,
    gia_tien,
    ngay_ky,
    trang_thai
];
  let id = req.params.id;
Hop_dong.updatehop_dongs(id, update, function (err, data) {
  res.status(201).json({
    Message: "thanh cong",
    uhop_dong : data,
  });
});
};

exports.deletehop_dong = (req, res, next) => {
  const id = req.params.id;

  Hop_dong.deletehop_dongs(id, function (data) {
    res.status(200).json({
      Message: "thanh cong",
      dhop_dong: data,
    });
  });
};
