
$data.Class.define("$data.Facebook.types.FbUser", $data.Entity, null, {
    uid: { type: "int", key: true, isPublic: true, searchable: true },
    username: { type: "string", isPublic: true, searchable: true },
    first_name: { type: "string", isPublic: true },
    middle_name: { type: "string", isPublic: true },
    last_name: { type: "string", isPublic: true },
    name: { type: "string", isPublic: true, searchable: true },
    pic_small: { type: "string" },
    pic_big: { type: "string" },
    pic_square: { type: "string" },
    pic: { type: "string" },
    affiliations: { type: "Array", elementType: "Object" },
    profile_update_time: { type: "datetime" },
    timezone: { type: "int" },
    religion: { type: "string" },
    birthday: { type: "string" },
    birthday_date: { type: "string" },
    sex: { type: "string", isPublic: true },
    hometown_location: { type: "Array", elementType: "Object" },
    meeting_sex: { type: "Array", elementType: "Object" },
    meeting_for: { type: "Array", elementType: "Object" },
    relationship_status: { type: "string" },
    significant_other_id: { type: "int" /*uid*/ },
    political: { type: "string" },
    current_location: { type: "Array", elementType: "Object" },
    activities: { type: "string" },
    interests: { type: "string" },
    is_app_user: { type: "bool" },
    music: { type: "string" },
    tv: { type: "string" },
    movies: { type: "string" },
    books: { type: "string" },
    quotes: { type: "string" },
    about_me: { type: "string" },
    hs_info: { type: "Array", elementType: "Object" },
    education_history: { type: "Array", elementType: "Object" },
    work_history: { type: "Array", elementType: "Object" },
    notes_count: { type: "int" },
    wall_count: { type: "int" },
    status: { type: "string" },
    has_added_app: { type: "bool" },
    online_presence: { type: "string" },
    locale: { type: "string", isPublic: true },
    proxied_email: { type: "string" },
    profile_url: { type: "string" },
    email_hashes: { type: "Array", elementType: "Object" },
    pic_small_with_logo: { type: "string", isPublic: true },
    pic_big_with_logo: { type: "string", isPublic: true },
    pic_square_with_logo: { type: "string", isPublic: true },
    pic_with_logo: { type: "string", isPublic: true },
    allowed_restrictions: { type: "string" },
    verified: { type: "bool" },
    profile_blurb: { type: "string" },
    family: { type: "Array", elementType: "Object" },
    website: { type: "string" },
    is_blocked: { type: "bool" },
    contact_email: { type: "string" },
    email: { type: "string" },
    third_party_id: { type: "string", searchable: true },
    name_format: { type: "string" },
    video_upload_limits: { type: "Array", elementType: "Object" },
    games: { type: "string" },
    work: { type: "Array", elementType: "Object" },
    education: { type: "Array", elementType: "Object" },
    sports: { type: "Array", elementType: "Object" },
    favorite_athletes: { type: "Array", elementType: "Object" },
    favorite_teams: { type: "Array", elementType: "Object" },
    inspirational_people: { type: "Array", elementType: "Object" },
    languages: { type: "Array", elementType: "Object" },
    likes_count: { type: "int" },
    friend_count: { type: "int" },
    mutual_friend_count: { type: "int" },
    can_post: { type: "bool" }
}, null)