import React from 'react'

export default (props) => {
    return (
        <section class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-uppercase">{props.title}</h4>
                        <ol class="breadcrumb">
                            <li>Home
                            </li>
                            <li class="active">{props.title}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}