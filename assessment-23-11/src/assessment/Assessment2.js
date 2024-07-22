import React, { useState, useEffect } from 'react'
import _, { forIn } from 'lodash'
import ConfirmationModal from '../ConfirmationModal';


const DAYS_ARRAY = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const MONTH_ARRAY = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];

function Assessment2() {
    const [MEDICINE_DATA_FOR_UPDATE, setMEDICINE_DATA_FOR_UPDATE] = useState([
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 3881,
            "medicine_taken": false,
            "created_at": "2023-11-26T18:30:00.000Z",
            "slot_time": "05:00 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 4881,
            "medicine_taken": false,
            "created_at": "2023-11-26T18:30:00.000Z",
            "slot_time": "12:00 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 5881,
            "medicine_taken": false,
            "created_at": "2023-11-26T18:30:00.000Z",
            "slot_time": "10:00 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2681,
            "medicine_taken": false,
            "created_at": "2023-11-26T18:30:00.000Z",
            "slot_time": "07:00 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },

        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2883,
            "medicine_taken": false,
            "created_at": "2023-11-22T18:30:00.000Z",
            "slot_time": "03:55 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2886,
            "medicine_taken": false,
            "created_at": "2023-11-28T18:30:00.000Z",
            "slot_time": "09:55 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2890,
            "medicine_taken": false,
            "created_at": "2023-11-28T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2887,
            "medicine_taken": false,
            "created_at": "2023-11-29T18:30:00.000Z",
            "slot_time": "09:55 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2891,
            "medicine_taken": false,
            "created_at": "2023-11-29T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2884,
            "medicine_taken": false,
            "created_at": "2023-12-18T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2888,
            "medicine_taken": false,
            "created_at": "2023-12-18T18:30:00.000Z",
            "slot_time": "09:55 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2892,
            "medicine_taken": false,
            "created_at": "2023-12-18T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2885,
            "medicine_taken": false,
            "created_at": "2023-11-23T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2889,
            "medicine_taken": false,
            "created_at": "2023-11-23T18:30:00.000Z",
            "slot_time": "09:55 pm",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2893,
            "medicine_taken": false,
            "created_at": "2023-11-23T18:30:00.000Z",
            "slot_time": "07:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer006",
            "power": "500"
        }, {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2872,
            "medicine_taken": false,
            "created_at": "2023-11-23T18:30:00.000Z",
            "slot_time": "06:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2682,
            "medicine_taken": false,
            "created_at": "2023-02-23T18:30:00.000Z",
            "slot_time": "06:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2982,
            "medicine_taken": false,
            "created_at": "2023-04-23T18:30:00.000Z",
            "slot_time": "06:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2282,
            "medicine_taken": false,
            "created_at": "2023-04-23T18:30:00.000Z",
            "slot_time": "06:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
        {
            "prescription_id": 1579130,
            "remarks": "",
            "id": 2182,
            "medicine_taken": false,
            "created_at": "2023-07-23T18:30:00.000Z",
            "slot_time": "06:55 am",
            "dosage": "1",
            "medicine_name": "testmedzaheer007",
            "power": "500"
        },
    ]);
    const [FINAL_MEDICINE_DATA, setFINAL_MEDICINE_DATA] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isExpiredAllSlot, setIsExpiredAllSlot] = useState();
    const [isConfModalShow, setIsConfModalShow] = useState(false);
    const [forEditDoseSlot, setForEditDoseSlot] = useState();

    useEffect(() => {
        MEDICINE_DATA_FOR_UPDATE.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        const groupedByDate = _.groupBy(MEDICINE_DATA_FOR_UPDATE, (medicine) => {
            return new Date(medicine.created_at).toDateString();
        });
        const addIsExpired = (medicineArray) => {
            const currentDateTime = new Date();
            return medicineArray.map((medicine) => {
                const medicineDateTime = new Date(medicine.created_at);
                const slotDateTime = new Date(`${medicineDateTime.toDateString()} ${medicine.slot_time}`);
                const isExpired = currentDateTime > slotDateTime;
                return { ...medicine, ...(medicine.isExpired === undefined ? { isExpired } : {}) };
            });
        };
        const groupedData = _.mapValues(groupedByDate, (medicineArray) => {
            return _.mapValues(_.groupBy(medicineArray, 'slot_time'), addIsExpired);
        });
        const isExpiredArray = Object.keys(groupedData).map((date) =>
            Object.keys(groupedData[date]).some((slotTime) =>
                groupedData[date][slotTime].every((medicine) => medicine.isExpired)
            )
        );
        setFINAL_MEDICINE_DATA(groupedData)

        console.log(isExpiredArray);
        setIsExpiredAllSlot(isExpiredArray);
        const todayDateKey = new Date().toDateString();
        setSelectedDate(todayDateKey);


    }, []);

    function convertTo24HourFormat(time12h) {
        const [time, period] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        hours = Number(hours);

        if (period.toLowerCase() === 'pm' && hours !== 12) {
            hours += 12;
        } else if (period.toLowerCase() === 'am' && hours === 12) {
            hours = 0;
        }
        return `${hours.toString().padStart(2, '0')}:${minutes}`;
    }

    function timeEventFinder(timeOn12Hour) {
        let time = convertTo24HourFormat(timeOn12Hour)
        if (time >= '06:00' && time < '12:00') {
            return <i className="fa-solid text-yellow-400 fa-sun"></i>;
        } else if (time >= '12:00' && time < '17:00') {
            return '🕛';
        } else if (time >= '17:00' && time < '20:00') {
            return <i className="fa-solid fa-cloud-moon text-orange-500"></i>;
        } else if (time >= '20:00' || time < '06:00') {
            return <i className="fa-solid fa-moon text-blue-950"></i>;
        }
    }
    function sort_time_slot(obj) {
        // console.log(obj)
        let keys = Object.keys(obj)
        keys.sort((keyA, keyB) => {
            const timeA = convertTo24HourFormat(keyA).split(':').map(Number);
            const timeB = convertTo24HourFormat(keyB).split(':').map(Number);
            let timeValueA = timeA[0] * 100 + timeA[1]
            let timeValueB = timeB[0] * 100 + timeB[1]
            return timeValueA - timeValueB;
        });
        const sortedObject = Object.fromEntries(keys.map(key => [key, obj[key]]));
        // console.log(sortedObject)
        return sortedObject;
    }
    function handleOnclickSlot(ids) {
        setForEditDoseSlot(ids)
        setIsConfModalShow(true)
    }
    function groupMedicineDataByDateAndTime(medicineData) {
        const groupedByDate = _.groupBy(medicineData, (medicine) => {
            return new Date(medicine.created_at).toDateString();
        });

        const addIsExpired = (medicineArray) => {
            const currentDateTime = new Date();
            return medicineArray.map((medicine) => {
                const medicineDateTime = new Date(medicine.created_at);
                const slotDateTime = new Date(`${medicineDateTime.toDateString()} ${medicine.slot_time}`);
                const isExpired = currentDateTime > slotDateTime;
                return { ...medicine, ...(medicine.isExpired === undefined ? { isExpired } : {}) };
            });
        };

        const groupedData = _.mapValues(groupedByDate, (medicineArray) => {
            return _.mapValues(_.groupBy(medicineArray, 'slot_time'), addIsExpired);
        });

        return groupedData;
    }

    function editDoseSlot() {
        const idsForChange = forEditDoseSlot.map(itm => itm.id);
        let updateData = MEDICINE_DATA_FOR_UPDATE.map(item => {
            if (idsForChange.includes(item.id)) {
                return { ...item, isExpired: false };
            } else {
                return { ...item };
            }
        });
        setMEDICINE_DATA_FOR_UPDATE(updateData);

        const updatedGroupedData = groupMedicineDataByDateAndTime(updateData);

        const isExpiredArray = Object.keys(updatedGroupedData).map((date) =>
            Object.keys(updatedGroupedData[date]).some((slotTime) =>
                updatedGroupedData[date][slotTime].every((medicine) => medicine.isExpired)
            )
        );

        setFINAL_MEDICINE_DATA(updatedGroupedData);
        setIsExpiredAllSlot(isExpiredArray);
        setIsConfModalShow(false);
    }
    return (
        <div>
            <ConfirmationModal open={isConfModalShow} setOpen={setIsConfModalShow} onYesClick={() => editDoseSlot()} />
            <div className='flex flex-wrap w-[731px] rounded justify-start bg-gray-300'>
                {Object.keys(FINAL_MEDICINE_DATA).map((date, index) => (
                    <DayWiseToggleBtn
                        selectedDate={selectedDate}
                        date={date}
                        key={index}
                        onToggleClick={() => setSelectedDate(date)}
                        isAllExpired={isExpiredAllSlot && isExpiredAllSlot[index]}
                    />
                ))}
            </div>
            {selectedDate && FINAL_MEDICINE_DATA[selectedDate] && (
                <div className='w-full'>
                    {Object.keys(sort_time_slot(FINAL_MEDICINE_DATA[selectedDate])).map((slotTime) => (
                        <div onClick={FINAL_MEDICINE_DATA[selectedDate][slotTime][0].isExpired ? () => handleOnclickSlot(FINAL_MEDICINE_DATA[selectedDate][slotTime]) : null} className={`my-2 rounded px-6 py-2 w-full justify-between flex bg-blue-600 ${FINAL_MEDICINE_DATA[selectedDate][slotTime][0].isExpired ? 'cursor-pointer' : ''}`} key={slotTime}>
                            <div className='w-[625px]'>
                                <div className='flex justify-between'>
                                    <h1>{timeEventFinder(slotTime)}</h1>
                                    <p>{slotTime}</p>
                                </div>
                                <h1 className='text-xl text-start'>
                                    {FINAL_MEDICINE_DATA[selectedDate][slotTime].map((medicine, index) => (
                                        <div key={index}>{medicine.medicine_name}</div>
                                    ))}
                                </h1>
                            </div>
                            {FINAL_MEDICINE_DATA[selectedDate][slotTime][0].isExpired && <div className='bg-red-800 rounded ml-1 w-[30px] h-[] '><i className="cursor-pointer fa-solid fa-chevron-down text-sm"></i></div>}
                        </div>
                    ))}
                    {Object.keys(sort_time_slot(FINAL_MEDICINE_DATA[selectedDate])).map((slotTime) => (
                        console.log(FINAL_MEDICINE_DATA[selectedDate][slotTime][0].isExpired)
                    ))}
                </div>
            )
            }
        </div >
    )
}
export default Assessment2


function DayWiseToggleBtn({ date, onToggleClick, selectedDate, isAllExpired }) {
    let medicine_date = new Date(date)
    // console.log(date)
    return (
        <div onClick={() => onToggleClick(date)} className={`m-2 shadow-md ${selectedDate === date ? 'bg-blue-500' : 'text-green-700 bg-white'} cursor-pointer rounded p-1 border bg flex flex-col  gap-1 px-3`}>
            <h1>{medicine_date.getDate()}-{MONTH_ARRAY[medicine_date.getMonth()]}</h1>
            <span>{DAYS_ARRAY[new Date(date).getDay()]}</span>
            <div className={`rounded w-[10px] h-[10px] ${isAllExpired ? 'bg-red-600' : ''} mx-auto`}></div>
        </div>
    )
}