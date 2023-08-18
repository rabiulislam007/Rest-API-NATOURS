const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverView = catchAsync(async (req, res) => {
  //1) Get tour data from collection
  const tours = await Tour.find();

  //2) Build Template

  //3) Render that template using toud data  from  1)

  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review eating user',
  });

  if (!tour) {
    return next(new AppError('There is no tour with that name', 404));
  }

  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour,
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log Into your account',
  });
};
