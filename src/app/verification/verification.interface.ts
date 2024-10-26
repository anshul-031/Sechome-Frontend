interface VerificationData {
  selfie: string | null;
  aadhaarMethod: 'upload' | 'photo';
  aadhaarImages: AadhaarImage[];
}

export interface AadhaarImage {
    file?: File;
    preview?: string;
    captured?: string;
  }
