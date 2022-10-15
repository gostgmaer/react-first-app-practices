import { left } from "@popperjs/core";

let waitingroom = {
  room_details: [
    {
      id: 1,
      name: "DPIE",
      default_queue_id: 1,
      status: "active",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      start_time: "1:00 AM",
      end_time: "11:59 PM",
      time_zone: "America/New_York",
      queue_topic: "biinc_room_1_adjudication_1_1",
    },
    {
      id: 1,
      name: "DPIE",
      default_queue_id: 1,
      status: "active",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      start_time: "1:00 AM",
      end_time: "11:59 PM",
      time_zone: "America/New_York",
      queue_topic: "biinc_room_2_adjudication_1_1",
    },
    {
      id: 2,
      name: "Vermont - N400",
      default_queue_id: 7,
      status: "active",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      start_time: "1:00 AM",
      end_time: "11:59 PM",
      time_zone: "America/New_York",
      queue_topic: null,
    },
    {
      id: 4,
      name: "Baltimore - N400",
      default_queue_id: 14,
      status: "active",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      start_time: "9:00 AM",
      end_time: "6:00 PM",
      time_zone: "America/New_York",
      queue_topic: null,
    },
    {
      id: 5,
      name: "Baltimore - H1B",
      default_queue_id: 15,
      status: "active",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      start_time: "9:00 AM",
      end_time: "6:00 PM",
      time_zone: "America/New_York",
      queue_topic: null,
    },
    {
      id: 6,
      name: "Baltimore - I485",
      default_queue_id: 16,
      status: "active",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      start_time: "",
      end_time: "",
      time_zone: "",
      queue_topic: null,
    },
    {
      id: 7,
      name: "Vermont - I20",
      default_queue_id: 17,
      status: "active",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      start_time: "",
      end_time: "",
      time_zone: "",
      queue_topic: null,
    },
  ],
  status: 200,
};

let provider = {
  providers: [
    {
      id: 102,
      provider_first_name: "Varun",
      provider_last_name: "Sengupta",
      provider_email: "varun.sengupta@inadev.com",
      availability: "AVAILABLE",
      status: "active",
      agent_id: "A607093",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      current_serving_queue_id: 1,
      current_serving_room_id: 1,
      room_id: 1,
      assinged_queue: [
        {
          id: 916,
          queue_id: 1,
          room_id: 1,
          provider_id: 102,
          status: "active",
          created_on: "2022-10-14T08:41:52.000Z",
          updated_on: "2022-10-14T08:41:52.000Z",
          queue_name: "Adjudication",
          queue_description: "Adjudication",
          room_name: "DPIE",
        },
        {
          id: 917,
          queue_id: 2,
          room_id: 1,
          provider_id: 102,
          status: "active",
          created_on: "2022-10-14T08:41:52.000Z",
          updated_on: "2022-10-14T08:41:52.000Z",
          queue_name: "Interview",
          queue_description: "Interview",
          room_name: "DPIE",
        },
        {
          id: 918,
          queue_id: 3,
          room_id: 1,
          provider_id: 102,
          status: "active",
          created_on: "2022-10-14T08:41:52.000Z",
          updated_on: "2022-10-14T08:41:52.000Z",
          queue_name: "Oath Administration",
          queue_description: "Oath Administration",
          room_name: "DPIE",
        },
      ],
    },
    {
      id: 172,
      provider_first_name: "Test",
      provider_last_name: "Account",
      provider_email: "vsengupta@limbicsystems.com",
      availability: "AVAILABLE",
      status: "active",
      agent_id: "A283629",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      current_serving_queue_id: 0,
      current_serving_room_id: 0,
      room_id: 1,
      assinged_queue: [
        {
          id: 911,
          queue_id: 2,
          room_id: 1,
          provider_id: 172,
          status: "active",
          created_on: "2022-10-14T08:38:26.000Z",
          updated_on: "2022-10-14T08:38:26.000Z",
          queue_name: "Interview",
          queue_description: "Interview",
          room_name: "DPIE",
        },
      ],
    },
    {
      id: 175,
      provider_first_name: "Test",
      provider_last_name: "A",
      provider_email: "varunsengupta@gmail.com",
      availability: "UNAVAILABLE",
      status: "active",
      agent_id: "A386634",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      current_serving_queue_id: 0,
      current_serving_room_id: 0,
      room_id: 1,
      assinged_queue: [
        {
          id: 765,
          queue_id: 1,
          room_id: 1,
          provider_id: 175,
          status: "active",
          created_on: "2022-10-08T10:54:41.000Z",
          updated_on: "2022-10-08T10:54:41.000Z",
          queue_name: "Adjudication",
          queue_description: "Adjudication",
          room_name: "DPIE",
        },
        {
          id: 766,
          queue_id: 2,
          room_id: 1,
          provider_id: 175,
          status: "active",
          created_on: "2022-10-08T10:54:41.000Z",
          updated_on: "2022-10-08T10:54:41.000Z",
          queue_name: "Interview",
          queue_description: "Interview",
          room_name: "DPIE",
        },
        {
          id: 767,
          queue_id: 3,
          room_id: 1,
          provider_id: 175,
          status: "active",
          created_on: "2022-10-08T10:54:41.000Z",
          updated_on: "2022-10-08T10:54:41.000Z",
          queue_name: "Oath Administration",
          queue_description: "Oath Administration",
          room_name: "DPIE",
        },
      ],
    },
    {
      id: 176,
      provider_first_name: "Yogesh",
      provider_last_name: "Asthana",
      provider_email: "yogesh.asthana@inadev.com",
      availability: "UNAVAILABLE",
      status: "active",
      agent_id: "A168802",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      current_serving_queue_id: 0,
      current_serving_room_id: 0,
      room_id: 1,
      assinged_queue: [
        {
          id: 760,
          queue_id: 1,
          room_id: 1,
          provider_id: 176,
          status: "active",
          created_on: "2022-10-08T10:54:25.000Z",
          updated_on: "2022-10-08T10:54:25.000Z",
          queue_name: "Adjudication",
          queue_description: "Adjudication",
          room_name: "DPIE",
        },
        {
          id: 761,
          queue_id: 2,
          room_id: 1,
          provider_id: 176,
          status: "active",
          created_on: "2022-10-08T10:54:25.000Z",
          updated_on: "2022-10-08T10:54:25.000Z",
          queue_name: "Interview",
          queue_description: "Interview",
          room_name: "DPIE",
        },
        {
          id: 762,
          queue_id: 3,
          room_id: 1,
          provider_id: 176,
          status: "active",
          created_on: "2022-10-08T10:54:25.000Z",
          updated_on: "2022-10-08T10:54:25.000Z",
          queue_name: "Oath Administration",
          queue_description: "Oath Administration",
          room_name: "DPIE",
        },
      ],
    },
    {
      id: 177,
      provider_first_name: "test staff",
      provider_last_name: "staff",
      provider_email: "staff@staff.com",
      availability: "UNAVAILABLE",
      status: "active",
      agent_id: "A232393",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      current_serving_queue_id: 0,
      current_serving_room_id: 0,
      room_id: 1,
      assinged_queue: [
        {
          id: 791,
          queue_id: 1,
          room_id: 1,
          provider_id: 177,
          status: "active",
          created_on: "2022-10-08T11:22:55.000Z",
          updated_on: "2022-10-08T11:22:55.000Z",
          queue_name: "Adjudication",
          queue_description: "Adjudication",
          room_name: "DPIE",
        },
        {
          id: 792,
          queue_id: 2,
          room_id: 1,
          provider_id: 177,
          status: "active",
          created_on: "2022-10-08T11:22:55.000Z",
          updated_on: "2022-10-08T11:22:55.000Z",
          queue_name: "Interview",
          queue_description: "Interview",
          room_name: "DPIE",
        },
      ],
    },
    {
      id: 178,
      provider_first_name: "Testname",
      provider_last_name: "kumar",
      provider_email: "abc@gmail.com",
      availability: "UNAVAILABLE",
      status: "active",
      agent_id: "A110351",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      current_serving_queue_id: 0,
      current_serving_room_id: 0,
      room_id: 1,
      assinged_queue: [
        {
          id: 752,
          queue_id: 1,
          room_id: 1,
          provider_id: 178,
          status: "active",
          created_on: "2022-10-08T10:52:24.000Z",
          updated_on: "2022-10-08T10:52:24.000Z",
          queue_name: "Adjudication",
          queue_description: "Adjudication",
          room_name: "DPIE",
        },
      ],
    },
    {
      id: 179,
      provider_first_name: "gsg",
      provider_last_name: "sdsf",
      provider_email: "dfgd@fd.co",
      availability: "UNAVAILABLE",
      status: "active",
      agent_id: "A250728",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      current_serving_queue_id: 0,
      current_serving_room_id: 0,
      room_id: 1,
      assinged_queue: [
        {
          id: 789,
          queue_id: 1,
          room_id: 1,
          provider_id: 179,
          status: "active",
          created_on: "2022-10-08T11:22:27.000Z",
          updated_on: "2022-10-08T11:22:27.000Z",
          queue_name: "Adjudication",
          queue_description: "Adjudication",
          room_name: "DPIE",
        },
        {
          id: 790,
          queue_id: 2,
          room_id: 1,
          provider_id: 179,
          status: "active",
          created_on: "2022-10-08T11:22:27.000Z",
          updated_on: "2022-10-08T11:22:27.000Z",
          queue_name: "Interview",
          queue_description: "Interview",
          room_name: "DPIE",
        },
      ],
    },
    {
      id: 180,
      provider_first_name: "test",
      provider_last_name: "laast",
      provider_email: "sr@gmail.com",
      availability: "UNAVAILABLE",
      status: "active",
      agent_id: "A922588",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      current_serving_queue_id: 0,
      current_serving_room_id: 0,
      room_id: 1,
      assinged_queue: [
        {
          id: 754,
          queue_id: 1,
          room_id: 1,
          provider_id: 180,
          status: "active",
          created_on: "2022-10-08T10:52:40.000Z",
          updated_on: "2022-10-08T10:52:40.000Z",
          queue_name: "Adjudication",
          queue_description: "Adjudication",
          room_name: "DPIE",
        },
      ],
    },
    {
      id: 217,
      provider_first_name: "Frist",
      provider_last_name: "2nd",
      provider_email: "sadjak@info.in",
      availability: "UNAVAILABLE",
      status: "active",
      agent_id: "A972087",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      current_serving_queue_id: 0,
      current_serving_room_id: 0,
      room_id: 1,
      assinged_queue: [
        {
          id: 852,
          queue_id: 1,
          room_id: 1,
          provider_id: 217,
          status: "active",
          created_on: "2022-10-10T14:05:21.000Z",
          updated_on: "2022-10-10T14:05:21.000Z",
          queue_name: "Adjudication",
          queue_description: "Adjudication",
          room_name: "DPIE",
        },
        {
          id: 853,
          queue_id: 2,
          room_id: 1,
          provider_id: 217,
          status: "active",
          created_on: "2022-10-10T14:05:21.000Z",
          updated_on: "2022-10-10T14:05:21.000Z",
          queue_name: "Interview",
          queue_description: "Interview",
          room_name: "DPIE",
        },
        {
          id: 854,
          queue_id: 3,
          room_id: 1,
          provider_id: 217,
          status: "active",
          created_on: "2022-10-10T14:05:21.000Z",
          updated_on: "2022-10-10T14:05:21.000Z",
          queue_name: "Oath Administration",
          queue_description: "Oath Administration",
          room_name: "DPIE",
        },
      ],
    },
    {
      id: 218,
      provider_first_name: "testapp",
      provider_last_name: "test",
      provider_email: "support@gmail.com",
      availability: "UNAVAILABLE",
      status: "active",
      agent_id: "A109279",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      current_serving_queue_id: 0,
      current_serving_room_id: 0,
      room_id: 2,
      assinged_queue: [
        {
          id: 889,
          queue_id: 1,
          room_id: 2,
          provider_id: 218,
          status: "active",
          created_on: "2022-10-11T08:24:57.000Z",
          updated_on: "2022-10-11T08:24:57.000Z",
          queue_name: "Adjudication",
          queue_description: "Adjudication",
          room_name: "Vermont - N400",
        },
      ],
    },
  ],
  status: 200,
};
let providerDetails = {
  provider: {
    id: 102,
    provider_first_name: "Varun",
    provider_last_name: "Sengupta",
    provider_email: "varun.sengupta@inadev.com",
    availability: "AVAILABLE",
    status: "active",
    agent_id: "A607093",
    created_by_user_id: 1,
    last_updated_by_user_id: 1,
    created_on: "2020-11-23T18:31:21.000Z",
    updated_on: "2022-10-14T11:44:52.000Z",
    room_id: 1,
    meeting_service_type: "1",
  },
  queues: {
    id: 1,
    name: "Adjudication",
    description: "Adjudication",
    status: "active",
    created_by_user_id: null,
    last_updated_by_user_id: null,
    created_on: "2022-04-15T13:24:44.000Z",
    updated_on: "2022-04-15T13:24:44.000Z",
    provider_join_queue: "2022-10-14T08:41:52.000Z",
    room_id: 1,
    meeting_service_type: "1",
  },
  status: 200,
};
let waitingRoomdetails = {
  room_details: [
    {
      id: 1,
      name: "DPIE",
      default_queue_id: 1,
      status: "active",
      created_by_user_id: 1,
      last_updated_by_user_id: 1,
      created_on: "2020-06-04T07:41:30.000Z",
      updated_on: "2020-08-18T11:51:47.000Z",
      meeting_service_type: "1",
      start_time: "1:00 AM",
      end_time: "11:59 PM",
      time_zone: "America/New_York",
      check_in_buffer: 3600,
      room_logo: null,
      queue_topic: "biinc_room_1_adjudication_1_1",
    },
  ],
  room_config: [
    {
      name: "DPIE",
      id: 1,
      room_id: 1,
      queue_id: 1,
      queue_topic: "biinc_room_1_adjudication_1_1",
      queue_name_identifier: "Adjudication",
      status: "active",
      default_waiting_time: 600,
      is_automated: 0,
      next_room_queue_id: null,
      created_by_user_id: 1,
      last_updated_by_user_id: null,
      created_on: "2022-04-15T13:27:42.000Z",
      updated_on: "2022-09-16T13:22:28.000Z",
      queue_name: "Adjudication",
      description: "Adjudication",
      customers: [
        {
          id: 3054,
          queue_id: 1,
          room_id: 1,
          customer_id: 308,
          status: "2",
          is_deleted: "active",
          token: "J 113083054",
          meeting_room_id: "J1130830541665761326141",
          meeting_duration: null,
          message: null,
          alien_number: "8ASDA-9849-8",
          project_dox_case_id: null,
          case_name: null,
          case_type: null,
          created_on: "2022-10-14T11:44:35.000Z",
          updated_on: "2022-10-14T11:44:52.000Z",
          provider_id: 102,
          first_name: "kISHOR",
          last_name: "sARKAR",
          isd_code: "+1",
          phone: "8116030952",
          email: "kishor.sarkar@inadev.com",
          initial_created_on: "2022-10-14T11:44:35.000Z",
          agent_id: "A607093",
          meeting_service_type: "1",
        },
      ],
    },
    {
      name: "DPIE",
      id: 2,
      room_id: 1,
      queue_id: 2,
      queue_topic: "biinc_room_1_interview_2_2",
      queue_name_identifier: "Interview",
      status: "active",
      default_waiting_time: 600,
      is_automated: 0,
      next_room_queue_id: null,
      created_by_user_id: 1,
      last_updated_by_user_id: null,
      created_on: "2022-04-15T13:27:42.000Z",
      updated_on: "2022-09-16T13:22:29.000Z",
      queue_name: "Interview",
      description: "Interview",
      customers: [],
    },
    {
      name: "DPIE",
      id: 3,
      room_id: 1,
      queue_id: 3,
      queue_topic: "biinc_room_1_oath_administration_3_3",
      queue_name_identifier: "Oath Administration",
      status: "active",
      default_waiting_time: 600,
      is_automated: 0,
      next_room_queue_id: null,
      created_by_user_id: 1,
      last_updated_by_user_id: null,
      created_on: "2022-04-15T13:27:42.000Z",
      updated_on: "2022-09-16T13:22:29.000Z",
      queue_name: "Oath Administration",
      description: "Oath Administration",
      customers: [],
    },
  ],
  status: 200,
};
let queueAvarageWaitingTime = {
  message: "Notification send successfully",
  status: 200,
};
let customerDetails = {
  customer: {
    id: 308,
    first_name: "kISHOR",
    last_name: "sARKAR",
    isd_code: "+1",
    phone: "8116030952",
    email: "kishor.sarkar@inadev.com",
    status: "active",
    created_on: "2022-10-14T11:44:35.000Z",
    updated_on: "2022-10-14T11:44:35.000Z",
    dob: "2017-10-11T00:00:00.000Z",
    birth_country: "IN",
    prefered_language: "en",
    current_address: "Pan india",
    meeting_service_type: "1",
  },
  customer_queues: [
    {
      queue_name: "Adjudication",
      queue_id: 1,
      room_id: 1,
      queue_status: "3",
      alien_number: "8ASDA-9849-8",
      entry_created_on: "2022-10-14T11:44:35.000Z",
      entry_updated_on: "2022-10-15T13:12:18.000Z",
      customer_id: 308,
      case_name: "",
      case_type: "",
      is_deleted: "deleted",
      token: "J 113083054",
      meeting_duration: 91647,
      meeting_room_id: "J1130830541665761326141",
      queue_topic: "biinc_room_1_adjudication_1_1",
      provider_id: 102,
      project_dox_case_id: "",
      agent_id: "A607093",
    },
    {
      queue_name: "Interview",
      queue_id: 2,
      room_id: 1,
      queue_status: "2",
      alien_number: "8ASDA-9849-8",
      entry_created_on: "2022-10-15T13:12:06.000Z",
      entry_updated_on: "2022-10-15T13:12:48.000Z",
      customer_id: 308,
      case_name: "",
      case_type: "",
      is_deleted: "active",
      token: "J 113083054",
      meeting_duration: null,
      meeting_room_id: null,
      queue_topic: "biinc_room_1_interview_2_2",
      provider_id: 102,
      project_dox_case_id: "",
      agent_id: "A607093",
    },
    {
      queue_name: "Oath Administration",
      queue_id: 3,
      room_id: 1,
      queue_status: "1",
      alien_number: "8ASDA-9849-8",
      entry_created_on: "2022-10-15T13:12:10.000Z",
      entry_updated_on: "2022-10-15T13:12:18.000Z",
      customer_id: 308,
      case_name: "",
      case_type: "",
      is_deleted: "active",
      token: "J 113083054",
      meeting_duration: null,
      meeting_room_id: null,
      queue_topic: "biinc_room_1_oath_administration_3_3",
      provider_id: null,
      project_dox_case_id: "",
      agent_id: null,
    },
  ],
  status: 200,
};
let customerNotes = {
  notes: [
    {
      id: 136,
      queue_id: 2,
      queue: "Interview",
      provider_first_name: "Varun",
      provider_last_name: "Sengupta",
      notes: "Capture your case notes here.",
      created_on: "2022-10-15T13:12:55.000Z",
    },
  ],
  message: "1 meeting notes found",
  status: 200,
};
let tokenLists ={
    "result": [
        {
            "id": 136,
            "first_name": "EKTA",
            "last_name": "SINGH",
            "isd_code": "+1",
            "phone": "9768508488",
            "email": "Nitinpatil@gmail.com",
            "token": "J 111362238",
            "alien_number": "skIJVVS:637",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 111362238",
                    "meeting_room_id": "",
                    "meeting_duration": 71,
                    "alien_number": "skIJVVS:637",
                    "created_on": "2022-04-26T10:12:01.000Z",
                    "updated_on": "2022-05-08T02:31:39.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 111362238",
                    "meeting_room_id": null,
                    "meeting_duration": 7,
                    "alien_number": "skIJVVS:637",
                    "created_on": "2022-05-08T02:31:32.000Z",
                    "updated_on": "2022-05-08T02:31:56.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 111362238",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "skIJVVS:637",
                    "created_on": "2022-05-08T02:31:38.000Z",
                    "updated_on": "2022-05-10T04:40:32.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-04-26T10:12:01.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "13 days 18 hours 28 minutes 31 seconds"
        },
        {
            "id": 135,
            "first_name": "EKTA",
            "last_name": "SINGH",
            "isd_code": "+1",
            "phone": "7033627842",
            "email": "esingh20s@gmail.com",
            "token": "J 111352236",
            "alien_number": "0g3OXNX:631",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 111352236",
                    "meeting_room_id": "",
                    "meeting_duration": null,
                    "alien_number": "0g3OXNX:631",
                    "created_on": "2022-04-19T21:16:55.000Z",
                    "updated_on": "2022-05-08T04:17:23.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-04-19T21:16:55.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "18 days 7 hours 00 minutes 28 seconds"
        },
        {
            "id": 137,
            "first_name": "EKTA",
            "last_name": "SINGH",
            "isd_code": "+1",
            "phone": "9932868652",
            "email": "Rt@yopmail.com",
            "token": "J 111372239",
            "alien_number": "4ht9U8B:653",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 111372239",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "4ht9U8B:653",
                    "created_on": "2022-04-27T13:39:04.000Z",
                    "updated_on": "2022-05-08T04:17:53.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-04-27T13:39:04.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "10 days 14 hours 38 minutes 49 seconds"
        },
        {
            "id": 138,
            "first_name": "EKTA",
            "last_name": "SINGH",
            "isd_code": "+1",
            "phone": "9768508480",
            "email": "nitinpatiln73@gmail.com",
            "token": "J 111382240",
            "alien_number": "8r6RHJj:662",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 111382240",
                    "meeting_room_id": "",
                    "meeting_duration": null,
                    "alien_number": "8r6RHJj:662",
                    "created_on": "2022-04-29T10:16:32.000Z",
                    "updated_on": "2022-05-08T18:16:12.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-04-29T10:16:32.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "9 days 7 hours 59 minutes 40 seconds"
        },
        {
            "id": 141,
            "first_name": "EKTA",
            "last_name": "SINGH",
            "isd_code": "+1",
            "phone": "9932858523",
            "email": "Gd@gmail.com",
            "token": "J 111412243",
            "alien_number": "j4YTh4a:668",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 111412243",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "j4YTh4a:668",
                    "created_on": "2022-04-29T11:24:45.000Z",
                    "updated_on": "2022-05-08T22:02:52.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-04-29T11:24:45.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "9 days 10 hours 38 minutes 07 seconds"
        },
        {
            "id": 148,
            "first_name": "EKTA",
            "last_name": "SINGH",
            "isd_code": "+1",
            "phone": "9932868602",
            "email": "Tt@yopmail.com",
            "token": "J 111482252",
            "alien_number": "p6a9AVT:730",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 111482252",
                    "meeting_room_id": "",
                    "meeting_duration": null,
                    "alien_number": "p6a9AVT:730",
                    "created_on": "2022-05-06T10:44:36.000Z",
                    "updated_on": "2022-05-10T04:38:50.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-05-06T10:44:36.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "3 days 17 hours 54 minutes 14 seconds"
        },
        {
            "id": 142,
            "first_name": "EKTA",
            "last_name": "SINGH",
            "isd_code": "+1",
            "phone": "7033627842",
            "email": "singhekta200@gmail.com",
            "token": "J 111422244",
            "alien_number": "vIhaR61:670",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 111422244",
                    "meeting_room_id": "",
                    "meeting_duration": null,
                    "alien_number": "vIhaR61:670",
                    "created_on": "2022-04-29T14:25:54.000Z",
                    "updated_on": "2022-05-10T04:40:14.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-04-29T14:25:54.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "10 days 14 hours 14 minutes 20 seconds"
        },
        {
            "id": 143,
            "first_name": "ABC",
            "last_name": "ABC",
            "isd_code": "+1",
            "phone": "1234567890",
            "email": "test@test.com",
            "token": "J 111432245",
            "alien_number": "D3lUx8r:672",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 111432245",
                    "meeting_room_id": "",
                    "meeting_duration": null,
                    "alien_number": "D3lUx8r:672",
                    "created_on": "2022-05-02T14:33:31.000Z",
                    "updated_on": "2022-05-10T04:40:38.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-05-02T14:33:31.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "7 days 14 hours 07 minutes 07 seconds"
        },
        {
            "id": 140,
            "first_name": "EKTA",
            "last_name": "SINGH",
            "isd_code": "+1",
            "phone": "9932868602",
            "email": "Bbzh@gmail.com",
            "token": "J 111402242",
            "alien_number": "pN9Etl8:667",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 111402242",
                    "meeting_room_id": "",
                    "meeting_duration": null,
                    "alien_number": "pN9Etl8:667",
                    "created_on": "2022-04-29T11:02:58.000Z",
                    "updated_on": "2022-05-10T04:40:44.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-04-29T11:02:58.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "10 days 17 hours 37 minutes 46 seconds"
        },
        {
            "id": 139,
            "first_name": "EKTA",
            "last_name": "SINGH",
            "isd_code": "+1",
            "phone": "9768508480",
            "email": "nitin.patil@inadev.com",
            "token": "J 111392241",
            "alien_number": "WH87AP9:664",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 111392241",
                    "meeting_room_id": "",
                    "meeting_duration": null,
                    "alien_number": "WH87AP9:664",
                    "created_on": "2022-04-29T10:22:00.000Z",
                    "updated_on": "2022-05-10T04:40:50.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-04-29T10:22:00.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "10 days 18 hours 18 minutes 50 seconds"
        },
       
        {
            "id": 217,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarkar@inadev.com",
            "token": "J 112172913",
            "alien_number": "111-555-9999",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112172913",
                    "meeting_room_id": "J1121729131663930561547",
                    "meeting_duration": 554,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-23T10:47:49.000Z",
                    "updated_on": "2022-09-23T10:57:10.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112172913",
                    "meeting_room_id": "J1121729131663930660554",
                    "meeting_duration": 38,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-23T10:57:03.000Z",
                    "updated_on": "2022-09-23T10:58:00.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112172913",
                    "meeting_room_id": null,
                    "meeting_duration": 11965,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-23T10:57:54.000Z",
                    "updated_on": "2022-09-23T14:35:13.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112172913",
                    "meeting_room_id": null,
                    "meeting_duration": 6,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-23T14:15:26.000Z",
                    "updated_on": "2022-09-23T14:35:27.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112172913",
                    "meeting_room_id": null,
                    "meeting_duration": 36,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-23T14:35:08.000Z",
                    "updated_on": "2022-09-26T04:49:55.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112172913",
                    "meeting_room_id": "J1121729131664171271408",
                    "meeting_duration": 129,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-26T05:45:52.000Z",
                    "updated_on": "2022-09-26T05:49:30.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112172913",
                    "meeting_room_id": null,
                    "meeting_duration": 5422,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-26T07:09:04.000Z",
                    "updated_on": "2022-09-26T08:39:31.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112172913",
                    "meeting_room_id": null,
                    "meeting_duration": 199,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-26T12:23:26.000Z",
                    "updated_on": "2022-09-26T12:26:52.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112172913",
                    "meeting_room_id": null,
                    "meeting_duration": 5371,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-26T08:39:26.000Z",
                    "updated_on": "2022-09-26T13:56:36.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112172913",
                    "meeting_room_id": "J1121729131664202426962",
                    "meeting_duration": 2059,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-26T12:26:46.000Z",
                    "updated_on": "2022-09-26T14:31:27.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112172913",
                    "meeting_room_id": null,
                    "meeting_duration": 48828,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-26T14:31:22.000Z",
                    "updated_on": "2022-09-27T04:16:10.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112172913",
                    "meeting_room_id": "J1121729131664252358814",
                    "meeting_duration": 557,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-27T04:16:04.000Z",
                    "updated_on": "2022-09-27T04:25:50.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112172913",
                    "meeting_room_id": null,
                    "meeting_duration": 3838,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-27T11:42:56.000Z",
                    "updated_on": "2022-09-27T12:46:56.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112172913",
                    "meeting_room_id": "J1121729131664287790035",
                    "meeting_duration": 4312,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-27T12:46:47.000Z",
                    "updated_on": "2022-09-27T14:11:17.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112172913",
                    "meeting_room_id": null,
                    "meeting_duration": 51061,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-27T14:11:10.000Z",
                    "updated_on": "2022-09-28T04:25:40.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112172913",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-28T08:04:53.000Z",
                    "updated_on": "2022-09-28T10:44:52.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112172913",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-28T06:50:15.000Z",
                    "updated_on": "2022-09-28T10:44:52.000Z",
                    "status": "5",
                    "provider_id": null,
                    "message": "Plan review process completed"
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112172913",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "111-555-9999",
                    "created_on": "2022-09-28T07:21:17.000Z",
                    "updated_on": "2022-09-28T10:44:52.000Z",
                    "status": "5",
                    "provider_id": null,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-09-23T10:47:49.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "4 days 23 hours 57 minutes 03 seconds"
        },
        {
            "id": 258,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarka5r@inadev.com",
            "token": "J 112582908",
            "alien_number": "111-555-0000",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112582908",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "111-555-0000",
                    "created_on": "2022-09-23T07:58:35.000Z",
                    "updated_on": "2022-09-23T11:48:05.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": ""
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-09-23T07:58:35.000Z",
            "status": "5",
            "message": "",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "3 hours 49 minutes 30 seconds"
        },
        {
            "id": 280,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarka2r@inadev.com",
            "token": "J 112802927",
            "alien_number": "999-555-9999",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112802927",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "999-555-9999",
                    "created_on": "2022-09-26T14:25:22.000Z",
                    "updated_on": "2022-09-26T14:31:48.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": ""
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-09-26T14:25:22.000Z",
            "status": "5",
            "message": "",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "6 minutes 26 seconds"
        },
        {
            "id": 281,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarka52r@inadev.com",
            "token": "J 112812928",
            "alien_number": "999-9999-9999",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112812928",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "999-9999-9999",
                    "created_on": "2022-09-26T14:26:34.000Z",
                    "updated_on": "2022-09-26T14:41:52.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": ""
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-09-26T14:26:34.000Z",
            "status": "5",
            "message": "",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "15 minutes 18 seconds"
        },
        {
            "id": 281,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarka52r@inadev.com",
            "token": "J 112812932",
            "alien_number": "999-9999-9999",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112812932",
                    "meeting_room_id": null,
                    "meeting_duration": 541,
                    "alien_number": "999-9999-9999",
                    "created_on": "2022-09-27T04:30:54.000Z",
                    "updated_on": "2022-09-27T04:46:31.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112812932",
                    "meeting_room_id": null,
                    "meeting_duration": 28,
                    "alien_number": "999-9999-9999",
                    "created_on": "2022-09-27T04:46:19.000Z",
                    "updated_on": "2022-09-27T04:48:58.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112812932",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "999-9999-9999",
                    "created_on": "2022-09-27T04:46:23.000Z",
                    "updated_on": "2022-09-27T04:49:43.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": ""
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-09-27T04:30:54.000Z",
            "status": "5",
            "message": "",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "18 minutes 49 seconds"
        },
        {
            "id": 280,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarka2r@inadev.com",
            "token": "J 112802940",
            "alien_number": "999-9999-9999",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112802940",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "999-9999-9999",
                    "created_on": "2022-09-27T13:10:25.000Z",
                    "updated_on": "2022-09-27T13:28:12.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": ""
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-09-27T13:10:25.000Z",
            "status": "5",
            "message": "",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "17 minutes 47 seconds"
        },
        {
            "id": 281,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarka52r@inadev.com",
            "token": "J 112812939",
            "alien_number": "999-9999-9999",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112812939",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "999-9999-9999",
                    "created_on": "2022-09-27T13:10:20.000Z",
                    "updated_on": "2022-09-27T13:39:45.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Not eligible for a walkthrough application"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-09-27T13:10:20.000Z",
            "status": "5",
            "message": "Not eligible for a walkthrough application",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "29 minutes 25 seconds"
        },
        {
            "id": 280,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarka2r@inadev.com",
            "token": "J 112802941",
            "alien_number": "999-9999-9999",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112802941",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "999-9999-9999",
                    "created_on": "2022-09-27T13:53:22.000Z",
                    "updated_on": "2022-09-27T14:08:19.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-09-27T13:53:22.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "14 minutes 57 seconds"
        },
        {
            "id": 282,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarkr@inadev.com",
            "token": "J 112822942",
            "alien_number": "999-9999-9999",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112822942",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "999-9999-9999",
                    "created_on": "2022-09-27T13:54:35.000Z",
                    "updated_on": "2022-09-27T14:11:43.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Not eligible for a walkthrough application"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-09-27T13:54:35.000Z",
            "status": "5",
            "message": "Not eligible for a walkthrough application",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "17 minutes 08 seconds"
        },
        {
            "id": 282,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarkr@inadev.com",
            "token": "J 112822944",
            "alien_number": "999-9999-9999",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112822944",
                    "meeting_room_id": null,
                    "meeting_duration": 28,
                    "alien_number": "999-9999-9999",
                    "created_on": "2022-09-27T14:13:55.000Z",
                    "updated_on": "2022-09-27T14:14:30.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112822944",
                    "meeting_room_id": null,
                    "meeting_duration": 21,
                    "alien_number": "999-9999-9999",
                    "created_on": "2022-09-27T14:14:14.000Z",
                    "updated_on": "2022-09-27T14:15:17.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112822944",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "999-9999-9999",
                    "created_on": "2022-09-27T14:14:22.000Z",
                    "updated_on": "2022-09-27T14:16:15.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "other Custom Data  Has been add for testing others application Terminate Message"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-09-27T14:13:55.000Z",
            "status": "5",
            "message": "other Custom Data  Has been add for testing others application Terminate Message",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "2 minutes 20 seconds"
        },
        {
            "id": 283,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sark52r@inadev.com",
            "token": "J 112832951",
            "alien_number": "999-9999-9999",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112832951",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "999-9999-9999",
                    "created_on": "2022-09-28T06:49:31.000Z",
                    "updated_on": "2022-09-28T06:58:46.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-09-28T06:49:31.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "9 minutes 15 seconds"
        },
        {
            "id": 282,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarkr@inadev.com",
            "token": "J 112822950",
            "alien_number": "999-9999-9999",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112822950",
                    "meeting_room_id": null,
                    "meeting_duration": 11313,
                    "alien_number": "999-9999-9999",
                    "created_on": "2022-09-28T05:44:25.000Z",
                    "updated_on": "2022-09-28T10:05:54.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112822950",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "999-9999-9999",
                    "created_on": "2022-09-28T10:05:43.000Z",
                    "updated_on": "2022-09-28T10:15:09.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Repeated attempts with no response"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-09-28T05:44:25.000Z",
            "status": "5",
            "message": "Repeated attempts with no response",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "4 hours 30 minutes 44 seconds"
        },
        {
            "id": 284,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sark2r@inadev.com",
            "token": "J 112842952",
            "alien_number": "999-9999-1111",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112842952",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "999-9999-1111",
                    "created_on": "2022-09-28T06:49:45.000Z",
                    "updated_on": "2022-09-28T10:15:42.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Not eligible for a walkthrough application"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-09-28T06:49:45.000Z",
            "status": "5",
            "message": "Not eligible for a walkthrough application",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "3 hours 25 minutes 57 seconds"
        },
        {
            "id": 217,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarkar@inadev.com",
            "token": "J 112172958",
            "alien_number": "222-999-1111",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112172958",
                    "meeting_room_id": null,
                    "meeting_duration": 5064,
                    "alien_number": "222-999-1111",
                    "created_on": "2022-09-28T13:27:19.000Z",
                    "updated_on": "2022-09-28T14:52:02.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112172958",
                    "meeting_room_id": "J1121729581664420916563",
                    "meeting_duration": 48882,
                    "alien_number": "222-999-1111",
                    "created_on": "2022-09-28T16:44:33.000Z",
                    "updated_on": "2022-09-29T06:19:19.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112172958",
                    "meeting_room_id": null,
                    "meeting_duration": 57,
                    "alien_number": "222-999-1111",
                    "created_on": "2022-09-28T14:51:55.000Z",
                    "updated_on": "2022-09-29T06:20:27.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112172958",
                    "meeting_room_id": null,
                    "meeting_duration": 11,
                    "alien_number": "222-999-1111",
                    "created_on": "2022-09-29T06:20:22.000Z",
                    "updated_on": "2022-09-29T06:20:47.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112172958",
                    "meeting_room_id": null,
                    "meeting_duration": 14218,
                    "alien_number": "222-999-1111",
                    "created_on": "2022-09-29T06:20:42.000Z",
                    "updated_on": "2022-09-29T10:24:22.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112172958",
                    "meeting_room_id": null,
                    "meeting_duration": 12657,
                    "alien_number": "222-999-1111",
                    "created_on": "2022-09-29T10:23:27.000Z",
                    "updated_on": "2022-09-29T13:55:43.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112172958",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "222-999-1111",
                    "created_on": "2022-09-30T12:51:07.000Z",
                    "updated_on": "2022-10-04T04:19:06.000Z",
                    "status": "5",
                    "provider_id": null,
                    "message": "Plan review process completed"
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112172958",
                    "meeting_room_id": "J1121729581664856884118",
                    "meeting_duration": null,
                    "alien_number": "222-999-1111",
                    "created_on": "2022-09-29T10:23:34.000Z",
                    "updated_on": "2022-10-04T04:19:06.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-09-28T13:27:19.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "5 days 14 hours 51 minutes 47 seconds"
        },
       
        {
            "id": 217,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarkar@inadev.com",
            "token": "J 112172987",
            "alien_number": "iu8gug:907",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112172987",
                    "meeting_room_id": "J1121729871664857766382",
                    "meeting_duration": 302265,
                    "alien_number": "iu8gug:907",
                    "created_on": "2022-10-04T04:28:46.000Z",
                    "updated_on": "2022-10-07T16:26:57.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112172987",
                    "meeting_room_id": "J1121729871665209645054",
                    "meeting_duration": 54714,
                    "alien_number": "iu8gug:907",
                    "created_on": "2022-10-07T16:24:22.000Z",
                    "updated_on": "2022-10-08T07:39:05.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112172987",
                    "meeting_room_id": "J1121729871665235017651",
                    "meeting_duration": 57089,
                    "alien_number": "iu8gug:907",
                    "created_on": "2022-10-08T06:19:43.000Z",
                    "updated_on": "2022-10-09T03:52:33.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112172987",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "iu8gug:907",
                    "created_on": "2022-10-08T14:21:57.000Z",
                    "updated_on": "2022-10-09T03:57:16.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Not eligible for a walkthrough application"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-10-04T04:28:46.000Z",
            "status": "5",
            "message": "Not eligible for a walkthrough application",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "4 days 23 hours 28 minutes 30 seconds"
        },
       
        {
            "id": 217,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarkar@inadev.com",
            "token": "J 112173002",
            "alien_number": "HJKI14KK:910",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112173002",
                    "meeting_room_id": null,
                    "meeting_duration": 10924,
                    "alien_number": "HJKI14KK:910",
                    "created_on": "2022-10-09T04:13:52.000Z",
                    "updated_on": "2022-10-09T07:17:43.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112173002",
                    "meeting_room_id": "J1121730021665302323359",
                    "meeting_duration": 2503,
                    "alien_number": "HJKI14KK:910",
                    "created_on": "2022-10-09T04:15:47.000Z",
                    "updated_on": "2022-10-09T07:59:45.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112173002",
                    "meeting_room_id": null,
                    "meeting_duration": 902,
                    "alien_number": "HJKI14KK:910",
                    "created_on": "2022-10-09T07:59:35.000Z",
                    "updated_on": "2022-10-09T08:15:01.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112173002",
                    "meeting_room_id": null,
                    "meeting_duration": 22,
                    "alien_number": "HJKI14KK:910",
                    "created_on": "2022-10-09T08:14:57.000Z",
                    "updated_on": "2022-10-09T08:15:34.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112173002",
                    "meeting_room_id": null,
                    "meeting_duration": 48960,
                    "alien_number": "HJKI14KK:910",
                    "created_on": "2022-10-09T08:15:30.000Z",
                    "updated_on": "2022-10-10T06:38:36.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112173002",
                    "meeting_room_id": null,
                    "meeting_duration": 36,
                    "alien_number": "HJKI14KK:910",
                    "created_on": "2022-10-10T06:36:02.000Z",
                    "updated_on": "2022-10-10T06:53:24.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112173002",
                    "meeting_room_id": null,
                    "meeting_duration": 14537,
                    "alien_number": "HJKI14KK:910",
                    "created_on": "2022-10-10T06:53:00.000Z",
                    "updated_on": "2022-10-10T10:56:56.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112173002",
                    "meeting_room_id": null,
                    "meeting_duration": 3742,
                    "alien_number": "HJKI14KK:910",
                    "created_on": "2022-10-10T10:04:55.000Z",
                    "updated_on": "2022-10-10T11:59:38.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112173002",
                    "meeting_room_id": "J1121730021665406814592",
                    "meeting_duration": 343,
                    "alien_number": "HJKI14KK:910",
                    "created_on": "2022-10-10T11:59:16.000Z",
                    "updated_on": "2022-10-10T13:05:22.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112173002",
                    "meeting_room_id": "J1121730021665407602974",
                    "meeting_duration": 1151,
                    "alien_number": "HJKI14KK:910",
                    "created_on": "2022-10-10T13:08:07.000Z",
                    "updated_on": "2022-10-10T13:27:26.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112173002",
                    "meeting_room_id": null,
                    "meeting_duration": 64962,
                    "alien_number": "HJKI14KK:910",
                    "created_on": "2022-10-10T13:26:59.000Z",
                    "updated_on": "2022-10-11T08:24:02.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112173002",
                    "meeting_room_id": "J1121730021665486805856",
                    "meeting_duration": 10404,
                    "alien_number": "HJKI14KK:910",
                    "created_on": "2022-10-11T04:37:22.000Z",
                    "updated_on": "2022-10-11T11:17:34.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112173002",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "HJKI14KK:910",
                    "created_on": "2022-10-11T11:17:29.000Z",
                    "updated_on": "2022-10-12T04:47:37.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-10-09T04:13:52.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "3 days 33 minutes 45 seconds"
        },
        {
            "id": 290,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.ssrkASra@inadev.com",
            "token": "J 112903022",
            "alien_number": "AKSKJAS:936",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112903022",
                    "meeting_room_id": null,
                    "meeting_duration": 16,
                    "alien_number": "AKSKJAS:936",
                    "created_on": "2022-10-11T04:51:56.000Z",
                    "updated_on": "2022-10-11T04:52:39.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112903022",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "AKSKJAS:936",
                    "created_on": "2022-10-11T04:52:35.000Z",
                    "updated_on": "2022-10-11T06:37:09.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Plan review process completed"
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 112903022",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "AKSKJAS:936",
                    "created_on": "2022-10-11T04:52:31.000Z",
                    "updated_on": "2022-10-11T06:37:09.000Z",
                    "status": "5",
                    "provider_id": null,
                    "message": "Plan review process completed"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-10-11T04:51:56.000Z",
            "status": "5",
            "message": "Plan review process completed",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "1 hours 45 minutes 13 seconds"
        },
        {
            "id": 282,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarkr@inadev.com",
            "token": "J 112823019",
            "alien_number": "HJKI14KK:915",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112823019",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "HJKI14KK:915",
                    "created_on": "2022-10-11T04:51:25.000Z",
                    "updated_on": "2022-10-11T09:07:09.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Not eligible for a walkthrough application"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-10-11T04:51:25.000Z",
            "status": "5",
            "message": "Not eligible for a walkthrough application",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "4 hours 15 minutes 44 seconds"
        },
        {
            "id": 288,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarkra@inadev.com",
            "token": "J 112883020",
            "alien_number": "HJKI14KK:916",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112883020",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "HJKI14KK:916",
                    "created_on": "2022-10-11T04:51:34.000Z",
                    "updated_on": "2022-10-11T09:07:24.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Repeated attempts with no response"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-10-11T04:51:34.000Z",
            "status": "5",
            "message": "Repeated attempts with no response",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "4 hours 15 minutes 50 seconds"
        },
        {
            "id": 289,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.ssrkra@inadev.com",
            "token": "J 112893021",
            "alien_number": "HJKI14KK:926",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112893021",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "HJKI14KK:926",
                    "created_on": "2022-10-11T04:51:44.000Z",
                    "updated_on": "2022-10-11T09:07:47.000Z",
                    "status": "5",
                    "provider_id": 102,
                    "message": "Repeated attempts with no response"
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-10-11T04:51:44.000Z",
            "status": "5",
            "message": "Repeated attempts with no response",
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "no status",
            "Total_time": "4 hours 16 minutes 03 seconds"
        },
        {
            "id": 217,
            "first_name": "sarkar",
            "last_name": "kishor",
            "isd_code": "+1",
            "phone": "8765432198",
            "email": "kishor.sarkar@inadev.com",
            "token": "J 112173028",
            "alien_number": "AKSKJAS:916",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 112173028",
                    "meeting_room_id": null,
                    "meeting_duration": 371,
                    "alien_number": "AKSKJAS:916",
                    "created_on": "2022-10-12T04:49:05.000Z",
                    "updated_on": "2022-10-12T04:57:51.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 112173028",
                    "meeting_room_id": "J1121730281665726585657",
                    "meeting_duration": 175248,
                    "alien_number": "AKSKJAS:916",
                    "created_on": "2022-10-12T04:57:42.000Z",
                    "updated_on": "2022-10-14T07:54:24.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-10-12T04:49:05.000Z",
            "status": "3",
            "message": null,
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "completed",
            "Total_time": "3 days 8 hours 25 minutes 49 seconds"
        },
      
       
        {
            "id": 308,
            "first_name": "kISHOR",
            "last_name": "sARKAR",
            "isd_code": "+1",
            "phone": "8116030952",
            "email": "kishor.sarkar@inadev.com",
            "token": "J 113083054",
            "alien_number": "8ASDA-9849-8",
            "assinged_queue": [
                {
                    "queue_id": 1,
                    "queue_name": "Adjudication",
                    "token": "J 113083054",
                    "meeting_room_id": "J1130830541665761326141",
                    "meeting_duration": 91647,
                    "alien_number": "8ASDA-9849-8",
                    "created_on": "2022-10-14T11:44:35.000Z",
                    "updated_on": "2022-10-15T13:12:18.000Z",
                    "status": "3",
                    "provider_id": 102,
                    "message": null
                },
                {
                    "queue_id": 3,
                    "queue_name": "Oath Administration",
                    "token": "J 113083054",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "8ASDA-9849-8",
                    "created_on": "2022-10-15T13:12:10.000Z",
                    "updated_on": "2022-10-15T13:12:18.000Z",
                    "status": "1",
                    "provider_id": null,
                    "message": null
                },
                {
                    "queue_id": 2,
                    "queue_name": "Interview",
                    "token": "J 113083054",
                    "meeting_room_id": null,
                    "meeting_duration": null,
                    "alien_number": "8ASDA-9849-8",
                    "created_on": "2022-10-15T13:12:06.000Z",
                    "updated_on": "2022-10-15T13:12:48.000Z",
                    "status": "2",
                    "provider_id": 102,
                    "message": null
                }
            ],
            "staff_info": [
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                },
                {
                    "provider_id": 102,
                    "provider_first_name": "Varun",
                    "provider_last_name": "Sengupta",
                    "agent_id": "A607093"
                }
            ],
            "entry_time": "2022-10-14T11:44:35.000Z",
            "status": "2",
            "message": null,
            "staff_fname": "Varun",
            "staff_lname": "S",
            "status_text": "inservice",
            "Total_time": "0 minutes 00 seconds"
        }
    ],
    "status": 200
}