import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, TextareaAutosize, ThemeProvider, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, {useLayoutEffect, useState} from 'react';
import FormikTextElement from '../components/FormikTextElement';
import FormikNumberElement from '../components/FormikNumberElement';
import FormikDropdownElement from '../components/FormikDropdownElement';

import '../styles/CreateSpellForm.scss'
import FORMIK_SPELL_LEVELS from '../data/_formikSpellLevel';
import FORMIK_CAST_TIME from '../data/_formikCastTime';
import FORMIK_ARCANOTYPE from '../data/_formikArcanotype';
import FORMIK_RESET_TIME_UNIT from '../data/_formikResetTimeUnit';
import FORMIK_SPELL_DURATION_UNIT from '../data/_formikSpellDurationUnit';
import FORMIK_DAMAGE_TYPE from '../data/_formikDamageType';
import FORMIK_ATTRIBUTE from '../data/_formikAttribute';
import FORMIK_RANGE_UNIT from '../data/_formikRangeUnit';
import FORMIK_TARGET_UNIT from '../data/_formikTargetUnit';
import { ButtonTheme } from '../../../shared/styles/mui/generic_styles';
import { useMutation } from '@apollo/client';
import CREATE_SPELL from '../queries/CREATE_SPELL';

// interface CreateSpellInput {
//     spell_name: string,
//     spell_level: number,
//     cast_time: string,
//     prep_cost: number,
//     prep_uses: number,
//     free_cost: number,
//     arcanotype: string,
//     spell_duration: number,
//     spell_duration_unit: string,
//     isRoleplay: boolean,
//     reset_condition: string,
//     spell_base_damage: number,
//     spell_damage_type: string,
//     spell_damage_subtype: string
//     save_type: string,
//     spell_min_range_unit: string,
//     spell_min_range_value: number,
//     spell_max_range_unit: string,
//     spell_max_range_value: number,
//     spell_target_unit: string,
//     spell_target_count: number,
//     damage_attribute: string,
//     spell_description: string[]
// }



const CreateSpellForm = () => {

    const [SubmitSpellCreation, {loading, data, error}] = useMutation(CREATE_SPELL);
    const [isClearDialogOpen, setClearDialogState] = useState(false);
    const [currentDialogEvent, setCurrentDialogEvent] = useState(undefined);
    const [isErrorDialogOpen, setErrorDialogState] = useState(false);
    const [errorText, setErrorText] = useState("");

    const spellFormik = useFormik({
        initialValues: {
            spell_name: "",
            spell_level: 1,
            cast_time: "STANDARD",
            prep_cost: 0,
            prep_uses: 0,
            free_cost: 0,
            arcanotype: "ELEMENTAL",
            spell_duration: 0,
            spell_duration_unit: "INSTANT",
            isRoleplay: false,
            reset_condition: "PER_ENCOUNTER",
            spell_base_damage: 0,
            spell_damage_type: "MAGICAL",
            spell_damage_subtype: "",
            save_type: "NONE",
            spell_min_range_unit: "RANGED",
            spell_min_range_value: 0,
            spell_max_range_unit: "RANGED",
            spell_max_range_value: 0,
            spell_target_unit: "INDIVIDUALS",
            spell_target_count: 0,
            spell_targets_description: "",
            damage_attribute: "MIGHT",
            attribute_multiplier: 0,
            spell_description: ""
        }, 
        validate: (data) => {
            
        },
        onSubmit: async(data, e) => {

            const {spell_name, spell_level, cast_time, prep_cost, prep_uses,
                free_cost, arcanotype, spell_duration, spell_duration_unit,
                isRoleplay, reset_condition, spell_base_damage, spell_damage_type,
                spell_damage_subtype, save_type, spell_min_range_unit, spell_min_range_value,
                spell_max_range_unit, spell_max_range_value, spell_target_unit, spell_target_count,
                damage_attribute, attribute_multiplier,spell_description, spell_targets_description
            } = data;

            const finalData = {
                spellData: {
                    spell_name,
                    spell_level,
                    cast_time,
                    prep_cost,
                    prep_uses,
                    free_cost,
                    arcanotype,
                    spell_duration,
                    spell_duration_unit,
                    isRoleplay,
                    reset_condition,
                    spell_damage: {
                        base_damage: spell_base_damage,
                        damage_type: spell_damage_type,
                        damage_subtype: spell_damage_subtype
                    },
                    save_type,
                    spell_range: {
                        standard_range: {
                            min_range: {
                                range_unit: spell_min_range_unit,
                                range_value: spell_min_range_value
                            },
                            max_range: {
                                range_unit:
                                spell_max_range_unit,
                                range_value: spell_max_range_value
                            }
                        }
                    },
                    spell_targets: {
                        target_unit: spell_target_unit,
                        target_count: spell_target_count,
                        target_description: spell_targets_description
                    },
                    damage_attribute,
                    attribute_multiplier,
                    spell_description: spell_description.split('\n')
                }
            }
            console.log(finalData);
            try {
                await SubmitSpellCreation({variables: finalData})
                spellFormik.handleReset(e);
            } catch (e) {
                setErrorText(JSON.stringify(e));
                handleErrorOpen();
            }
        }
    })



    const handleOpen = (e) => {
        setClearDialogState(true);
        setCurrentDialogEvent(e);
    };
    
    const handleClose = () => {
        setClearDialogState(false);
        setCurrentDialogEvent(undefined);
    };

    const handleErrorOpen = () => {
        console.log("gamer");
        setErrorDialogState(true);
    }

    const handleErrorClipboardClose = () => {
        navigator.clipboard.writeText(errorText);
        handleErrorClose();
    }

    const handleErrorClose = () => {
        setErrorDialogState(false);
    }

    const handleConfirm = (e) => {
        spellFormik.setFieldValue("spell_description", []);
        spellFormik.handleReset(currentDialogEvent);
        handleClose();
    };




    return (
        <div className="a-CreateSpellFormPage">
            <div className="a-CreateSpellHeader">
                <h2>Create New Spell</h2>
            </div>
            
            <form className="a-CreateSpellForm" onSubmit={spellFormik.handleSubmit}>
                <div className="a-SpellDetailsRow">
                    <FormikTextElement 
                        field={"spell_name"}
                        label={"Spell Name"}
                        formik={spellFormik}
                        
                    />
                </div>
                <div className="a-SpellDetailsRow">
                    <FormikDropdownElement
                        field={"spell_level"}
                        label={"Spell Level"}
                        formik={spellFormik}
                        values={FORMIK_SPELL_LEVELS}
                    />
                    <FormikDropdownElement
                        field={"cast_time"}
                        label={"Cast Time"}
                        formik={spellFormik}
                        values={FORMIK_CAST_TIME}
                    />
                    <FormikDropdownElement
                        field={"arcanotype"}
                        label={"Arcanotype"}
                        formik={spellFormik}
                        values={FORMIK_ARCANOTYPE}
                    />
                    <FormikDropdownElement
                        field={"save_type"}
                        label={"Save Type"}
                        formik={spellFormik}
                        values={FORMIK_ATTRIBUTE}
                    />
                </div>
                <div className="a-SpellDetailsRow">
                    <FormikNumberElement 
                        field={"prep_cost"}
                        label={"Preparation Cost"}
                        formik={spellFormik}
                    />
                    <FormikNumberElement 
                        field={"prep_uses"}
                        label={"Uses per Preparation"}
                        formik={spellFormik}
                    />
                    <FormikNumberElement 
                        field={"free_cost"}
                        label={"Freecast/Wand Cost"}
                        formik={spellFormik}
                    />
                </div>
                <div className="a-SpellDetailsRow">
                    <FormikNumberElement 
                        field={"spell_base_damage"}
                        label={"Base Damage"}
                        formik={spellFormik}
                    />
                    <FormikDropdownElement
                        field={"spell_damage_type"}
                        label={"Damage Type"}
                        formik={spellFormik}
                        values={FORMIK_DAMAGE_TYPE}
                    />
                    <FormikTextElement 
                        field={"spell_damage_subtype"}
                        label={"Damage Subtype"}
                        formik={spellFormik}
                    />
                    <FormikDropdownElement
                        field={"damage_attribute"}
                        label={"Damage Attribute"}
                        formik={spellFormik}
                        values={FORMIK_ATTRIBUTE}
                    />
                    <p>×</p>
                    <FormikNumberElement 
                        field={"attribute_multiplier"}
                        label={"Attribute Multiplier"}
                        formik={spellFormik}
                    />
                </div>
                <div className="a-SpellDetailsRow">
                    <FormikNumberElement 
                        field={"spell_min_range_value"}
                        label={"Spell Range (min)"}
                        formik={spellFormik}
                    />
                    <FormikDropdownElement
                        field={"spell_min_range_unit"}
                        label={"Spell Range Unit (min)"}
                        formik={spellFormik}
                        values={FORMIK_RANGE_UNIT}
                    />
                    <p>-</p>
                    <FormikNumberElement 
                        field={"spell_max_range_value"}
                        label={"Spell Range (max)"}
                        formik={spellFormik}
                    />
                    <FormikDropdownElement
                        field={"spell_max_range_unit"}
                        label={"Spell Range Unit (max)"}
                        formik={spellFormik}
                        values={FORMIK_RANGE_UNIT}
                    />
                </div>
                <div className="a-SpellDetailsRow">
                    <FormikNumberElement 
                        field={"spell_target_count"}
                        label={"Spell Targets"}
                        formik={spellFormik}
                    />
                    <FormikDropdownElement
                        field={"spell_target_unit"}
                        label={"Spell Target Type"}
                        formik={spellFormik}
                        values={FORMIK_TARGET_UNIT}
                    />
                    <FormikTextElement 
                        field={"spell_target_description"}
                        label={"Target Description (optional)"}
                        formik={spellFormik}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <FormikNumberElement 
                        field={"spell_duration"}
                        label={"Spell Duration"}
                        formik={spellFormik}
                    />
                    <FormikDropdownElement
                        field={"spell_duration_unit"}
                        label={"Spell Duration (unit)"}
                        formik={spellFormik}
                        values={FORMIK_SPELL_DURATION_UNIT}
                    />
                    
                    <FormikDropdownElement
                        field={"reset_condition"}
                        label={"Reset Condition"}
                        formik={spellFormik}
                        values={FORMIK_RESET_TIME_UNIT}
                    />
                </div>
                <div className="a-SpellDetailsRow">
                    <TextField 
                        id={"spell_description"}
                        className="a-SpellDescription"
                        name={"spell_description"}
                        type="text"
                        autoComplete='off'
                        label={"Spell Description"}
                        value={spellFormik.values.spell_description}
                        multiline
                        rows={8}
                        onChange={spellFormik.handleChange}
                    />
                </div>
                <div className="a-SpellDetailsRow">
                    <Button type="submit" variant="outlined" color="primary">Create Spell</Button>
                    <Button variant="outlined" color="warning" onClick={handleOpen}>Clear</Button>
                </div>
                    
            </form>
            <Dialog open={isClearDialogOpen} onClose={handleClose}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Are you sure you'd like to reset?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="error">
                    Cancel
                </Button>
                <Button onClick={handleConfirm} color="success">
                    Confirm
                </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={isErrorDialogOpen} onClose={handleErrorClose}>
                <DialogContent>
                    <Typography variant="h6">
                        Something went wrong. See error below.
                    </Typography>
                    <Typography variant="body1" color="error" sx={{overflowWrap: 'break-word'}}>
                        {errorText}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleErrorClipboardClose} color="warning">
                        Copy to Clipboard
                    </Button>
                    <Button onClick={handleErrorClose} color="error">
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>
            
        </div>
    )
}

export default CreateSpellForm;