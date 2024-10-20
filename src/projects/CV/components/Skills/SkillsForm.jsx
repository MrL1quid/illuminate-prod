import { useFormik } from 'formik'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'
import { addSkill } from '../../redux/slices/skillSlice'

const SkillsForm = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: "",
            range: ""
        },
        onSubmit: () => {
            dispatch(addSkill(formik.values));
            formik.setValues(formik.initialValues)
            formik.setTouched({
                name: false,
                range: false
            })
        },
        validate: (values) => {
            const errors = {}
            if (!values.name || values.name === "") {
                errors.name = 'skillName is a required field'
            }
            if (!values.range || values.range === "") {
                errors.range = 'skillRange is a required field'
            } else if (values.range > 100) {
                errors.range = 'skillRange should be less than or equal to 100'
            } else if (values.range < 10) {
                errors.range = 'skillRange should be more than or equal to 10'
            }
            return errors
        }
    })
    return (
        <form className='skillsForm' onSubmit={formik.handleSubmit}>
            <div className='inputArea'>
                <div>
                    <label htmlFor="name">Skill name</label>
                    <input
                        id="name"
                        type="text"
                        className={formik.errors.name && "wrong"}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="error">
                    {formik.errors.name}
                </div>
            </div>
            <div className='inputArea'>
                <div>
                    <label htmlFor="range">Skill range</label>
                    <input
                        id="range"
                        type="number"
                        className={formik.errors.range && "wrong"}
                        value={formik.values.range}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="error">
                    {formik.errors.range}
                </div>
            </div>
            <div>
                <Button
                    text='Add skill'
                    type='submit'
                    className={
                        (!formik.touched.name && !formik.touched.range)
                            || formik.errors.name
                            || formik.errors.range ? "btnDisabled" : ""
                    }
                    disabled={
                        (!formik.touched.name && !formik.touched.range)
                        || formik.errors.name || formik.errors.range} />
            </div>
        </form>
    )
}

export default SkillsForm