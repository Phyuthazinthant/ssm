import React from 'react'
import MMText from 'react-mm-text';
import lan from '../../configs/language'
import './toolstyle.css'

const tool = (props) => {
   
    const clan = "mm"
    return (
        // ====================================================================================================
        <form className="mt-3" >
            <div className="form-group d-flex justify-content-center ">
                <label for="colFormLabelLg" class="col-xs-3 col-sm-4 col-md-3 col-lg-2">
                    <MMText
                        text={lan[clan].toolkyat}
                        showFont={"unicode"}
                        conveter={"rabbit"}
                        detector={"knayi"}
                    />
                </label>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                    <input type="number" className="form-control" placeholder="" onChange={props.changevalue}  />
                </div>
            </div>

            <div className="form-group d-flex justify-content-center ">
                <label for="colFormLabelLg" class="col-xs-3 col-sm-4 col-md-3 col-lg-2">
                    <MMText
                        text={lan[clan].toolpae}
                        showFont={"unicode"}
                        conveter={"rabbit"}
                        detector={"knayi"}
                    />
                </label>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                    <input type="number" className="form-control" placeholder="" onChange={props.changevalue} />
                </div>
            </div>

            <div className="form-group d-flex justify-content-center ">
                <label for="colFormLabelLg" class="col-xs-3 col-sm-4 col-md-3 col-lg-2">
                    <MMText
                        text={lan[clan].toolywae}
                        showFont={"unicode"}
                        conveter={"rabbit"}
                        detector={"knayi"}
                    />
                </label>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                    <input type="number" className="form-control" placeholder="" onChange={props.changevalue}  />
                </div>
            </div>

            <div className="form-group d-flex justify-content-center ">
                <label for="colFormLabelLg" class="col-xs-3 col-sm-4 col-md-3 col-lg-2">
                    <MMText
                        text={lan[clan].toolprice}
                        showFont={"unicode"}
                        conveter={"rabbit"}
                        detector={"knayi"}
                    />
                </label>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                    <input type="number" className="form-control" placeholder="MMK" onChange={props.changevalue} />
                </div>
            </div>

            <div className="form-group d-flex justify-content-center ">
                <label className="col-xs-3 col-sm-4 col-md-3 col-lg-2"></label>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                    <button type="button" className="btn btn-warning cal" onClick={props.calculateClick}>Calculate</button>
                </div>
            </div>

    <div className="card card-header d-flex tool_ans">

    <div className="form-group d-flex justify-content-center ">
                <label for="colFormLabelLg" class="col-xs-3 col-sm-4 col-md-3 col-lg-3">
                    <MMText
                        text={lan[clan].toolans}
                        showFont={"unicode"}
                        conveter={"rabbit"}
                        detector={"knayi"}
                    />
                </label>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                   <span>-------------------- &nbsp;MMK</span>
                </div>
            </div>
       
       
      
    </div>
        </form>
    )
}
export default tool;
