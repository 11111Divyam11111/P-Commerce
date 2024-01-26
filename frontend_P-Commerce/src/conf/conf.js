const conf = {
    BackendUrl : String(process.env.REACT_APP_BACKEND),
    BackendProjectId : String(process.env.REACT_APP_PROJECT_ID),
    BackendDbId : String(process.env.REACT_APP_DATABASE_ID),
    BackendAppCollId : String(process.env.REACT_APP_COLLECTION_ID),
    BackendAppBucketId : String(process.env.REACT_APP_BUCKET_ID)
};

export default conf;