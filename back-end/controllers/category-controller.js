import categoryModel from "../models/category-model.js";

const addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "فیلد نام الزامی است" });
    }

    const newCategory = new categoryModel({ name });
    await newCategory.save();
    res.status(201).json({ success: true, data: newCategory });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "خطا در ایجاد دسته‌بندی" });
  }
};

const updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const { name } = req.body;
  try {
    const updatedCategory = await categoryModel.findByIdAndUpdate(
      categoryId,
      { name },
      { new: true }
    );
    if (!updatedCategory) {
      return res
        .status(404)
        .json({ success: false, message: "دسته‌بندی پیدا نشد" });
    }
    res.status(200).json({ success: true, data: updatedCategory });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "خطا در به‌روزرسانی دسته‌بندی" });
  }
};

const deleteCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const deletedCategory = await categoryModel.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      return res
        .status(404)
        .json({ success: false, message: "دسته‌بندی پیدا نشد" });
    }
    res
      .status(200)
      .json({ success: true, message: "دسته‌بندی با موفقیت حذف شد" });
  } catch (error) {
    res.status(500).json({ success: false, message: "خطا در حذف دسته‌بندی" });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "خطا در دریافت دسته‌بندی‌ها" });
  }
};

export { addCategory, updateCategory, deleteCategory, getCategories };
