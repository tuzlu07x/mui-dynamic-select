# mui-dynamic-select 

 				<DynamicSelect
                                error={props.errors.country_id}
                                dataOptions={props.countries}
                                dataRelation-value={null}
                                dataRelationKey={data.country_id}
                                dataName={data.country_id}
                                dataLabel="Country"
                                dataValueName="country_id"
                                setData={setData}
                            />

                            <DynamicSelect
                                error={props.errors.city_id}
                                dataOptions={props.cities}
                                dataRelationKey={data.country_id}
                                dataLabel="City"
                                dataName={data.city_id}
                                dataForeignId="country_id"
                                setData={setData}
                                dataValueName="city_id"
                            />

                            <DynamicSelect
                                error={props.errors.district_id}
                                dataOptions={props.districts}
                                dataRelationKey={data.city_id}
                                dataLabel="District"
                                dataName={data.district_id}
                                dataForeignId="city_id"
                                setData={setData}
                                dataValueName="district_id"
                            />
